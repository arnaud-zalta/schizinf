/////////////////////////////////////////////////////////////////////////
//                      Define experimental variables                  //
/////////////////////////////////////////////////////////////////////////
const coldBlue   = [82,142,196];
const warmOrange = [232,172,104];

//////////////////////////////////////////////////////////////////////////
//                         Full screen mode                             //
//////////////////////////////////////////////////////////////////////////

var full_screen = {
    type: jsPsychFullscreen,
    message: `
        <div style='display: flex; align-items: center; justify-content: center; text-align: center; height: 100vh;'>
            <p style="font-size: 1.5em; max-width: 80%;">
                <strong>The experiment needs to be in full screen to run properly. By clicking continue, it will switch to full screen mode.</strong><br>
            </p>
        </div>
    `,
    button_label: "Continue", // Default button label
    on_load: function() {
        // Wait for the page to load and then customize the button
        var style = document.createElement("style");
        style.innerHTML = `
            /* Customize the continue button */
            .jspsych-btn {
                padding: 20px 40px; /* Increase padding */
                font-size: 2em; /* Make font bigger */
                cursor: pointer;
                background-color: white; /* White background */
                color: black; /* Black text */
                border-radius: 10px; /* Rounded corners */
                border: 2px solid black; /* Border style */
                position: absolute;
                left: 50%; /* Center horizontally */
                bottom: 50px; /* Space from bottom */
                transform: translateX(-50%); /* Center the button using transform */
            }
        `;
        document.head.appendChild(style);

        // Listen for the "Continue" button click to reset the styles
        var button = document.querySelector(".jspsych-btn");
        button.addEventListener("click", function() {
            // Remove the custom styles immediately after button click
            document.head.removeChild(style);
        });
    }
};

//////////////////////////////////////////////////////////////////////////
//                     Initialize jsPsych                               //
//////////////////////////////////////////////////////////////////////////
// Set background color to grey for the whole experiment
document.body.style.backgroundColor = "grey";

// Initialize jsPsych //
var jsPsych = initJsPsych({
    on_finish: function() {
        // Add a small delay to ensure all trial data is recorded
        setTimeout(function() {
            final_data = jsPsych.data.get().csv();  // Useless on Pavlovia
            jsPsych.data.displayData();             // Useless on Pavlovia
            document.body.style.background = 'grey';
            document.getElementById("jspsych-content").innerHTML = "Completion code : CP6BOAG0"
        }, 100);
    }
});

//////////////////////////////////////////////////////////////////////////
//                  to play task using Pavlova server                   //
//////////////////////////////////////////////////////////////////////////

// /* init connection with pavlovia.org */
// const pavlovia_init = {
//     type: jsPsychPavlovia,
//     command: "init"
// };

// /* finish connection with pavlovia.org */
// var pavlovia_finish = {
//     type: jsPsychPavlovia,
//     command: "finish"
// };

//////////////////////////////////////////////////////////////////////////
//                             Consent form                             //
//////////////////////////////////////////////////////////////////////////

var external_consent_requirement = {
    type: jsPsychInstructions,
    show_clickable_nav: false,
    key_forward: null,
    pages: [external_consent],
    post_trial_gap: 1000,
    on_load: function () {
        const startButton = document.getElementById('start');
        if (startButton) {
            startButton.addEventListener('click', function () {
                jsPsych.finishTrial();
            });
        }
    }
};
//////////////////////////////////////////////////////////////////////////
//                  Define participant's number                         //
//////////////////////////////////////////////////////////////////////////

// Create function to have access to properties
function getExpProperties() {
  return {
    subj_num: jsPsych.data.dataProperties.subj_num,
    sess_num: jsPsych.data.dataProperties.sess_num
  };
}

// Simple hash function to convert ID string to number
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

function getParticipantQueryParams() {
    const params = new URLSearchParams(window.location.search);

    const prolificID = params.get('PROLIFIC_PID') || params.get('prolific_pid') || 'NA';
    const sessionID = params.get('SESSION_ID') || params.get('session_id') || 'NA';
    const studyID = params.get('STUDY_ID') || params.get('study_id') || 'NA';

    return {
        prolificID: prolificID,
        sessionID: sessionID,
        studyID: studyID
    };
}

// Extract and assign the parameters to jsPsych.data test version : randomly assigned
var prolific_setup = {
    type: jsPsychCallFunction,
    func: function() {
        const participantParams = getParticipantQueryParams();
        var prolificID = participantParams.prolificID;
        var sessionID  = participantParams.sessionID;
        var studyID    = participantParams.studyID;
        const sessionNumber = Number(sessionID);
        
        // Get deterministic number between 1 and 50 from prolificID
        const subj_num = (hashString(prolificID) % 50) + 1;
        
        jsPsych.data.addProperties({
            subject_id: prolificID,
            prolificID: prolificID,
            sess_num: Number.isFinite(sessionNumber) ? sessionNumber : 1,
            sessionID: sessionID,
            studyID: studyID,
            subj_num: Number(subj_num)
        });
    }
};

// Add custom CSS to hide the default button
var style = document.createElement("style");
style.innerHTML = `
  .hide-default-button .jspsych-btn {
    display: none !important;
  }
`;
document.head.appendChild(style);
  
// jatos.onLoad(() => {
//   const qp = jatos.urlQueryParameters || {};
//   const prolificID = qp.PROLIFIC_PID || "NA";
//   const sessionID  = qp.SESSION_ID   || 'NA';
//   const studyID    = qp.STUDY_ID     || 'NA';
//   jsPsych.data.addProperties({ prolificID: prolificID });
//   jsPsych.data.addProperties({ sessionID: sessionID });
//   jsPsych.data.addProperties({ studyID: studyID });
//   console.log("QP:", qp);
//   console.log("Prolific ID:", prolificID);
// });

//////////////////////////////////////////////////////////////////////////
//                 Blocks for Consent, Instructions, etc.               //
//////////////////////////////////////////////////////////////////////////

// Function to create a block of instructions with disabled keys
function disp_instructions(texts, disableKeys = 1) {
    // Ensure texts is always an array
    const pages = Array.isArray(texts) ? texts : [texts];

    return {
        type: jsPsychInstructions,
        show_clickable_nav: false,
        allow_backward: false, // Prevent going back with the left arrow key
        key_forward: disableKeys === 1 ? ' ' : null, // Set key_forward based on disableKeys
        pages: pages,          // Use the provided instruction texts directly
        post_trial_gap: 1000,  // 1-second gap after the block

        on_load: function() {
            // Define the event listener as a named function
            window.disableKeys = function(event) {
                if (event.code !== 'Space') {
                    event.preventDefault();
                    event.stopPropagation(); // Prevent further propagation of the event
                }
            };
            // Add the event listener
            document.addEventListener('keydown', window.disableKeys, true); // Use capture phase
        },
        on_finish: function() {
            if (window.disableKeys) {
                // Remove the event listener
                document.removeEventListener('keydown', window.disableKeys, true); // Use capture phase
                window.disableKeys = null;
            }
        }
    };
}

const instruction_texts1 = [
    instruction_text_p1,
    instruction_text_p2,
    instruction_text_p3,
    instruction_text_p4,
    instruction_text_p5,
];

const instruction_texts2 = [
    instruction_text_p7,
    instruction_text_p8,
    instruction_text_p9,
    instruction_text_p10,
    instruction_text_p11,
    instruction_text_p12,
    instruction_text_p13,
];  

//////////////////////////////////////////////////////////////////////////
//                     preload stimuli variables                        //
//////////////////////////////////////////////////////////////////////////

// Define Image Folders and Preload Function
const imgFolders = [
    './img/create_img/img_g_con0.15_n_con0.15',
    './img/create_img/img_g_con0.30_n_con0.15',
    './img/create_img/img_g_con0.45_n_con0.15',
    './img/create_img/img_instructions'
];

const gaborFolders = imgFolders.filter((folder) => !folder.endsWith('img_instructions'));

const exp_img = gaborFolders.flatMap((folder) =>
    Array.from({ length: 400 }, (_, index) => {
        const numStr = String(index + 1).padStart(3, '0');
        return `${folder}/image${numStr}.png`;
    })
);

const train_img = Array.from({ length: 40 }, (_, index) => {
    const numStr = String(index + 1).padStart(3, '0');
    return `./img/create_img/training/image${numStr}.png`;
});

const training_example_img = './img/create_img/img_instructions/img_g_con0.90_n_con0.05.png';

const instructionImages = [
    'green_arrow.png',
    'img_g_con0.15_n_con0.15.png',
    'img_g_con0.30_n_con0.15.png',
    'img_g_con0.45_n_con0.05.png',
    'img_g_con0.45_n_con0.10.png',
    'img_g_con0.45_n_con0.15.png',
    'img_g_con0.90_n_con0.05.png',
    'img_g_con0.90_n_con0.10.png',
    'img_g_con0.90_n_con0.15.png'
];

const baseImages = [
    './img/arrow_bloc.png',
    './img/grey.png'
];

var pre_load = {
    type: jsPsychPreload,
    images: function() {
        const img = [
            ...baseImages,
            ...imgFolders.flatMap((folder) => {
            if (folder.endsWith('img_instructions')) {
                return instructionImages.map((fileName) => `${folder}/${fileName}`);
            }

            return Array.from({ length: 400 }, (_, index) => {
                const numStr = String(index + 1).padStart(3, '0');
                return `${folder}/image${numStr}.png`;
            });
        })
        ];

        console.log("Image files to preload:", img);
        return img;
    }
}

//////////////////////////////////////////////////////////////////////////
//                          Display images                              //
//////////////////////////////////////////////////////////////////////////

function sampleVonMisesRadians(mu, kappa) {
    if (kappa < 1e-6) {
        return (Math.random() * 2 * Math.PI);
    }

    const a = 1 + Math.sqrt(1 + 4 * kappa * kappa);
    const b = (a - Math.sqrt(2 * a)) / (2 * kappa);
    const r = (1 + b * b) / (2 * b);

    while (true) {
        const u1 = Math.random();
        const z = Math.cos(Math.PI * u1);
        const f = (1 + r * z) / (r + z);
        const c = kappa * (r - f);

        const u2 = Math.random();
        if (u2 < c * (2 - c) || u2 <= Math.exp(-c)) {
            const u3 = Math.random();
            const sign = u3 - 0.5 >= 0 ? 1 : -1;
            let theta = mu + sign * Math.acos(f);
            theta = theta % (2 * Math.PI);
            return theta < 0 ? theta + 2 * Math.PI : theta;
        }
    }
}

function sampleVonMisesOrientationDeg(centerDeg, kappa = 2) {
    const mu = centerDeg * Math.PI / 180;
    const theta = sampleVonMisesRadians(mu, kappa);
    const deg360 = theta * 180 / Math.PI;
    return Math.round((deg360 + 180) % 180);
}

function blendRgb(start, end, weight) {
    return start.map((channel, index) => Math.round(channel + (end[index] - channel) * weight));
}

function rgbToCss(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function buildVonMisesBorderGradient(centerDeg, kappa = 2, stepDeg = 8) {
    // const coldBlue = [82, 142, 196];
    // const warmOrange = [232, 172, 104];
    const stops = [];

    for (let angle = 0; angle <= 360; angle += stepDeg) {
        const deltaRad = (angle - centerDeg) * Math.PI / 180;
        const blueDensity = Math.exp(kappa * Math.cos(2 * deltaRad));
        const orangeDensity = Math.exp(-kappa * Math.cos(2 * deltaRad));
        const orangeWeight = orangeDensity / (blueDensity + orangeDensity);
        const color = blendRgb(coldBlue, warmOrange, orangeWeight);
        stops.push(`${rgbToCss(color)} ${angle}deg`);
    }

    return `conic-gradient(from -90deg, ${stops.join(', ')})`;
}

function renderStimulusImage(trialImage, imageAngle, centerDeg, category, centerX, centerY, borderWidth) {
    const imageSize = 300;
    const outerSize = imageSize + borderWidth * 2;
    const blueOrientationDeg = category === 'orange'
        ? (centerDeg + 90) % 180
        : centerDeg;
    const borderGradient = buildVonMisesBorderGradient(blueOrientationDeg, 2);

    return `
        <div
            style="
                position:absolute;
                left:${centerX - outerSize / 2}px;
                top:${centerY - outerSize / 2}px;
                width:${outerSize}px;
                height:${outerSize}px;
                position: absolute;
                border-radius:50%;
                background:${borderGradient};
                overflow:hidden;
            ">
            <div
                style="
                    position:absolute;
                    left:${borderWidth}px;
                    top:${borderWidth}px;
                    width:${imageSize}px;
                    height:${imageSize}px;
                    border-radius:50%;
                    background:grey;
                ">
            </div>
            <img src="${trialImage}"
                style="
                    position:absolute;
                    left:${borderWidth}px;
                    top:${borderWidth}px;
                    width:${imageSize}px;
                    height:${imageSize}px;
                    display:block;
                    border-radius:50%;
                    transform: rotate(${imageAngle}deg);
                ">
        </div>
    `;
}

function categoryFromResponseKey(responseKey) {
    const key = String(responseKey || '').toLowerCase();
    if (key.includes('left')) {
        return 'orange';
    }
    if (key.includes('right')) {
        return 'blue';
    }
    return null;
}

function getTrainingIterationScore(trainingSetId, nSequenceTrials) {
    const responses = jsPsych.data.get().filterCustom((trialData) =>
        trialData.task === 'image_orientation' && trialData.training_set_id === trainingSetId
    ).last(nSequenceTrials).values();

    const good = responses.filter((trialData) => trialData.is_correct_category === true).length;
    return {
        good: good,
        total: responses.length
    };
}

// Create trial into a block
function trial(length, providedTrialImages = null, extraData = {}, category, angleCenter,dur=400) {
    console.log('category of trials: ',category)

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const borderWidth = 6; // Border width of the circles
    const validLengths = [1, 4, 8, 12];
    const nTrialImages = validLengths.includes(length) ? length : 4;
    const trialCategory = category;
    const resolvedAngleCenter = angleCenter;

    if (!['blue', 'orange'].includes(trialCategory)) {
        throw new Error('trial() requires category to be "blue" or "orange"');
    }
    if (!Number.isFinite(resolvedAngleCenter)) {
        throw new Error('trial() requires a numeric angleCenter');
    }

    const trialImages = Array.isArray(providedTrialImages)
        ? providedTrialImages
        : providedTrialImages
            ? [providedTrialImages]
            : jsPsych.randomization.sampleWithoutReplacement(exp_img, nTrialImages);

    const sampleDisplayAngle = () => sampleVonMisesOrientationDeg(resolvedAngleCenter, 2);
    const sampledAngles = trialImages.map(() => sampleDisplayAngle());

    const displayTrial = trialImages.flatMap((trialImage, index) => {
        const imageAngle = sampledAngles[index];
        return [
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: renderStimulusImage(trialImage, imageAngle, resolvedAngleCenter, trialCategory, centerX, centerY, borderWidth),
                choices: 'NO_KEYS',
                trial_duration: dur+jsPsych.randomization.randomInt(15,45), // maybe keep grey image after ? 
            }
        ];
    });

    const responseTrial = {
        type: jsPsychHtmlKeyboardResponse,
            stimulus: `
                <img src="./img/arrow_bloc.png" 
                style="
                    position:absolute;
                    left:${centerX}px;
                    top:${centerY}px;
                    transform: translate(-50%, -50%);
                    width:300px;
                    height:auto;">
        <p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%; text-align: center;color: black;">
        Select <span style="color: rgb(${warmOrange.join(',')});">left arrow</span> if the images were picked from the <span style="color: rgb(${warmOrange.join(',')});">orange category</span>.<br>
        Select <span style="color: rgb(${coldBlue.join(',')});">right arrow</span> if the images were picked from the <span style="color: rgb(${coldBlue.join(',')});">blue category</span>.<br><br>
        </p>`,
        choices: ['ArrowLeft', 'ArrowRight'],
        response_ends_trial: true,
        data: {
            task: 'image_orientation',
            image: "./img/vert.png",
            distribution_center_deg: resolvedAngleCenter,
            category: trialCategory,
            ...extraData
        },

        on_finish: function(data) {
            const chosenCategory = categoryFromResponseKey(data.response);
            const isCorrectCategory = chosenCategory === trialCategory;

            jsPsych.data.addDataToLastTrial({
                response: data.response,
                rt: data.rt,
                angle_center: resolvedAngleCenter,
                distribution_center_deg: resolvedAngleCenter,
                category: trialCategory,
                chosen_category: chosenCategory,
                correct: isCorrectCategory,
                is_correct_category: isCorrectCategory,
                angle: sampledAngles[sampledAngles.length - 1],
                angles: sampledAngles,
                n_trial_images: nTrialImages,
                ...extraData
            });
        }
    };
    return [...displayTrial, responseTrial];
}

function createBlock() {
    const categories = ['blue', 'orange'];
    const ax = [0, 45, 90, 135];

    // Pre-generate one label per trial: all combinations of sequenceLength x category x blueAxis
    // 3 lengths × 2 categories × 4 axes = 24 unique combos, each repeated once → 72 trials
    const trialLabels = [];
    for (const sequenceLength of [4, 8, 12]) {
        for (const category of categories) {
            for (const blueAxis of ax) {
                const angleCenter = category === 'blue' ? blueAxis : (blueAxis + 90) % 180;
                trialLabels.push({ sequenceLength, category, blueAxis, angleCenter });
            }
        }
    }

    // Shuffle all trial labels so category and angle are randomly distributed
    const shuffledLabels = jsPsych.randomization.shuffle(trialLabels);

    const totalImagesNeeded = shuffledLabels.reduce((sum, cfg) => sum + cfg.sequenceLength, 0);
    const blockImagePool = jsPsych.randomization.sampleWithoutReplacement(exp_img, totalImagesNeeded);

    let imageCursor = 0;
    const blockTimeline = [];

    shuffledLabels.forEach((cfg) => {
        const imagesForTrial = blockImagePool.slice(imageCursor, imageCursor + cfg.sequenceLength);
        imageCursor += cfg.sequenceLength;
        blockTimeline.push(...trial(cfg.sequenceLength, imagesForTrial, { blue_axis_deg: cfg.blueAxis }, cfg.category, cfg.angleCenter));
    });

    return blockTimeline;
}

////////////////////////////////////////////////////////////////////////////
////                              training                                //
////////////////////////////////////////////////////////////////////////////

function training(blk) {
    const tmp = [];
    const maxAttempts = 3;
    const minGoodAnswers = 3;
    const trainingSetId = `training_blk_${blk}_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    let currentAttempt = 1;
    let lastIterationGoodAnswers = 0;
    let nSequenceTrials = 0;

    const baseData = {
        training_block: blk,
        training_set_id: trainingSetId
    };

    const sampleTrainingLabel = function() {
        const category = jsPsych.randomization.sampleWithoutReplacement(['blue', 'orange'], 1)[0];
        const blueAxis = jsPsych.randomization.sampleWithoutReplacement([0, 45, 90, 135], 1)[0];
        const angleCenter = category === 'blue' ? blueAxis : (blueAxis + 90) % 180;
        return { category: category, angleCenter: angleCenter, blueAxis: blueAxis };
    };

    if (blk === 0) {
        for (let i = 0; i < 5; i++) {
            const label = sampleTrainingLabel();
            tmp.push(...trial(1, [training_example_img], { ...baseData, blue_axis_deg: label.blueAxis }, label.category, label.angleCenter,2000));
        }
        nSequenceTrials = 5;
    } else if (blk === 1) {
        const lseq = jsPsych.randomization.sampleWithReplacement([4, 8, 12], 5);
        for (let i = 0; i < 5; i++) {
            const label = sampleTrainingLabel();
            tmp.push(...trial(lseq[i], Array(lseq[i]).fill(training_example_img), { ...baseData, blue_axis_deg: label.blueAxis }, label.category, label.angleCenter));
        }
        nSequenceTrials = 5;
    } else if (blk === 2) {
        const lseq = jsPsych.randomization.sampleWithReplacement([4, 8, 12], 5);
        for (let i = 0; i < 5; i++) {
            const label = sampleTrainingLabel();
            tmp.push(...trial(lseq[i], jsPsych.randomization.sampleWithReplacement(train_img, lseq[i]), { ...baseData, blue_axis_deg: label.blueAxis }, label.category, label.angleCenter));
        }
        nSequenceTrials = 5;
    }

    const trainingFeedback = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: function() {
            const score = getTrainingIterationScore(trainingSetId, nSequenceTrials);
            lastIterationGoodAnswers = score.good;
            return `
                <div style="width:100vw; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white;">
                    <p style="font-size:2em; margin-bottom:20px;">Feedback</p>
                    <p style="font-size:1.6em;">${score.good} / ${score.total} correct answers</p>
                    <p style="font-size:1.1em; margin-top:30px;">Press space to continue</p>
                </div>
            `;
        },
        choices: [' '],
        data: {
            task: 'training_feedback',
            training_block: blk,
            training_set_id: trainingSetId
        },
        on_finish: function() {
            const score = getTrainingIterationScore(trainingSetId, nSequenceTrials);
            jsPsych.data.addDataToLastTrial({
                training_attempt: currentAttempt,
                good_answers: score.good,
                total_trials: score.total,
                pass_training_iteration: score.good >= minGoodAnswers
            });
        }
    };

    const trainingLoop = {
        timeline: [
            ...tmp,
            trainingFeedback
        ],
        loop_function: function() {
            if (lastIterationGoodAnswers >= minGoodAnswers) {
                disp_instructions(training_text)
                return false;
            }

            if (currentAttempt >= maxAttempts) {
                jsPsych.endExperiment(fail_text);
                return false;
            }

            currentAttempt++;
            return true;
        }
    };

    return [trainingLoop];
}

// Function to create a training block
function training_loop(block_number) {

    console.log("block number", block_number);
    return {
        
        // timeline: createBlock(block_number), // Dynamically create the timeline based on the image

        timeline: [
            ...createBlock(block_number),
            {
                timeline: [disp_instructions(training_text, 1)],
                conditional_function: function() {
                    // Get mean error for this round
                    const trials = jsPsych.data.get().filter({
                        task: 'angle_selection',
                        round: round
                    });
                    const error = trials.select('errorAngle').mean();
                    // Show feedback only if error >= 20 and round < 3
                    return error >= 20 && round < 3;
                }
            }
        ],

        on_start: function() {
        },
        loop_function: function() {
            const trials = jsPsych.data.get().filter({
                task: 'angle_selection',
                // image: "./img/example_gabor.png",
                round: round // Use the current round
            });

            const error = trials.select('errorAngle').mean();
            console.log(`mean error angle round n° ${round}: ${Math.round(error)}`);

            if (error < 20 && round <= 3) {

                round = 0; // Reset round for the next iteration
                return false; // End the loop if accuracy is sufficient
            } else if (error >= 20 && round < 3) {
                // alert(`Okay, great! Let's start another block.`);
                round++; // Increment round for the next iteration
                // Dynamically add feedback instructions only if needed
                // Update the timeline dynamically for the next training round
                // const newTimeline = [disp_instructions(training_text, 1),createBlock(block_number)];
                // jsPsych.addNodeToEndOfTimeline({ timeline: newTimeline });
                return true; // Continue the loop
            } else if (error >= 20 && round == 3) {
            
                jsPsych.run([disp_instructions(fail_text, 0)]);
                return false; // End the loop
            }   
        }
    };
}

// Update round outside training_loop
function update_round() {
    return {
        type: jsPsychCallFunction,
        func: () => {
            round++;
            console.log("round updated by update_round():", round);
        }
    };
}

// // Feedback at the end of a block
// function feedbackBlock() {
//     return {
//         type: jsPsychHtmlKeyboardResponse,
//         stimulus: function() {
//             // Get mean error for this block
//             const blockTrials = jsPsych.data.get().filter({
//                 task: 'angle_selection',
//                 round: round // Make sure you save block number in your trial data!
//             });
//             const meanError = blockTrials.select('errorAngle').mean() || 0;

//             // Gradient bar parameters
//             const barWidth = 400;
//             const barHeight = 40;
//             const minError = 0;
//             const maxError = 30; // Adjust as needed
//             const normalized = Math.min(Math.max(meanError, minError), maxError) / maxError;
//             const cursorX = normalized * barWidth;

//             // HTML for the gradient bar and cursor
//             return `
//                 <div style="width:100vw; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
//                     <div style="font-size:1.5em; margin-bottom:30px;">
//                         Your precision in this block
//                     </div>
//                     <div style="position:relative; width:${barWidth}px; height:${barHeight}px; margin-bottom:20px;">
//                         <div style="
//                             width:100%; height:100%; border-radius:20px;
//                             background: linear-gradient(to right, green, yellow, red);">
//                         </div>
//                         <div style="
//                             position:absolute; top:-8px; left:${cursorX-6}px; 
//                             width:12px; height:${barHeight+16}px; 
//                             background:black; border-radius:6px;">
//                         </div>
//                     </div>
//                     <div style="font-size:1em; color:white; display: flex; justify-content: space-between; width: ${barWidth}px; margin: 0 auto;">
//                         <span style="color:black; font-weight:bold;">Good</span>
//                         <span style="color:black; font-weight:bold;">Bad</span>
//                     </div>
//                     <div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
//                         <p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
//                         <strong>press the space bar to continue</strong><br><br>
//                         </p>
//                     </div>
//                 </div>
//             `;
//         },
//         choices: [' '],
//         post_trial_gap: 500
//     };
// }

//////////////////////////////////////////////////////////////////////////
//                      Start Experiment Flow                           //
//////////////////////////////////////////////////////////////////////////
// full_screen,external_consent_requirement,
var timeline = [prolific_setup,
    pre_load,
    disp_instructions(instruction_texts1,1),
    ...training(0),
    disp_instructions(instruction_text_p6,1),
    ...training(1),
    disp_instructions(instruction_texts2,1),
    ...training(2),
    disp_instructions(instruction_text_p14,1), 
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    ...createBlock(),
    disp_instructions(between_blocks_instruction),
    disp_instructions(end_exp_text)
];

// var timeline = [ pre_load,
//     ...createBlock(),
// ];

jsPsych.run(timeline);