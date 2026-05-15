
// External consent

var external_consent = `<div style='display: flex; flex-direction: column; align-items: center; text-align: center;' id="consent">
    <section id="consent_body" style="max-width: 600px; text-align: left;">
        <h3>Participation to a cognitive science experiment</h3>

        <h4>Visual perceptual task</h4>

        <br>
        Researcher in charge: 
        <br>
        Dr. Arnaud Zalta / Dr. Valentin WYART
        <br><br>
        This study aims to understand the visual perceptual processes in decision-making. Its fundamental purpose is to investigate the cognitive mechanisms of these decision-making processes. The proposed experiments have no immediate application or clinical value, but they will allow us to improve our understanding of the functioning brain.
        We are asking you to participate in this study because you have been recruited by the RISC or Prolific platforms.

        <br><br>
        <strong>PROCEDURE</strong>
        <br>
        During your participation in this study, we will ask you to perform a simple task, which does not require any particular competence. Your internet-based participation will require approximately 40 minutes.

        <br><br>
        <strong>VOLUNTARY PARTICIPATION AND CONFIDENTIALITY</strong>
        <br>
        Your participation in this study is voluntary. This means that you are consenting to participate in this project without external pressure. During your participation in this project, the researcher in charge and his staff will collect and record information about you.
        In order to preserve your identity and the confidentiality of the data, the identification of each file will be coded, thus preserving the anonymity of your answers. We will not collect any personal data from the RISC or Prolific platforms.
        The researcher in charge of this study will only use the data for research purposes in order to answer the scientific objectives of the project. The data may be published in scientific journals, in which case no publication or scientific communication will contain identifying information.

        <br><br>
        <strong>CONTACT AND ADDITIONAL INFORMATION</strong>
        <br>
        Email: inference.tasks@gmail.com
        <br><br>
        This research has received a favorable opinion from the Inserm Ethical Review Committee / IRB00003888 on November 13th, 2018.
        <br><br>
        Your participation in this research confirms that you have read this information and wish to participate in the research study.
        <br><br>

        <p><strong>Please check all the statements before starting:</strong><br>

        <strong>1)</strong> I am 18 years old or more.<br>
        <strong>2)</strong> My participation in this experiment is voluntary.<br>
        <strong>3)</strong> I understand that my data will be kept confidential and I can stop at any time without justification.<br>
    </section>

    <section id="consent_form" style="margin-top: 30px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <input type="checkbox" id="consent_checkbox" class="checkbox-custom"
               onClick="document.getElementById('start').disabled ^= true;"/>
        <label for="consent_checkbox" id="consent_label">I understand all the above and confirm that I agree to participate</label>
        <br/>
        <button type="button" class="jspsych-btn" id="start" disabled="true">
            Start the experiment
        </button>
    </section>
</div>`;

// Instructions before the experiment
var instruction_text_p1 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Hello !<br><br>
  To progress to the next screen of instructions<br><br>
  <strong>press the space bar</strong><br><br>
</p>
</div>
`;

var instruction_text_p2 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  You will play to a visual perceptual task<br><br>
  where the goal is to pay attention to the orientation of a series of ambiguous oriented shapes <br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p3 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 15%; width: 100%;">
  Here, you can see an example of an oriented shape you will see during the experiment.<br>
  In this case, the image is oriented horizontally.<br><br>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.05.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 10}px; 
    top:${(screen.height / 2) - screen.width / 15}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
">
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p4 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
  At each trial, a series of oriented shapes will be briefly displayed successively.<br>
  These shapes will vary in orientation and contrast.<br><br>
  But all shapes within a trial will share the same general orientation.<br>
  The goal of the task is to pay attention to the orientation of these shapes and to categorize them correctly.<br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p4 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
  For each trial you will have two choice : to select the blue categorie or the orange one.<br>
  These two categories correspond to the general orientation of the shapes and are orthogonal.<br><br>
  For example, if the shapes are mostly horizontal and correspond to the blue category, the orange category would correspond to vertical shapes.<br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p5 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
To familiarise with the experiement you will begin by a short training that begin by single shapes that you would have to categorize.<br>
Let&#39;s try an example <br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p6 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Okay<br><br>
  Now, trials with a varying number of shapes will be presented.<br><br>
  Remember to pay attention to the orientation of each shape in the sequence to categorize this trial as orange or blue.<br><br>
  Try to be as accurate as possible.<br><br></p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p7 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
Great job !<br><br>
Now, let&#39;s make the task a bit more challenging.<br><br>
From now on, the oriented shape will appear with lower contrast and some visual degradation.<br>
This will make it more difficult to determine its orientation accurately.<br></p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p8 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
Please watch carefully the examples below.<br>
These are oriented shapes that vary in the level of degradation but all have good contrast.</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.05.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${0}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.10.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${45}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${90}deg);
">
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p9 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
Please watch carefully the examples below.<br>
These are oriented shapes that vary in the level of degradation but all have good contrast.<br><br>
<strong>As you can see, the orientations are indicated by the green bars.</strong><br></p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.05.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${0}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.10.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${45}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.90_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${90}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${0}deg);
    opacity: 0.7;
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${45}deg);
    opacity: 0.7;
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${90}deg);
    opacity: 0.7;
">
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p10 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
 In the task, the oriented shapes will appear with lower contrast,<br><br>
 just like the examples below.<br><br>
 <strong>Watch them carefully and try to determine their orientation.</strong><br><br></p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.45_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${0}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.30_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${45}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.15_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${90}deg);
">
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p11 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 25%; width: 100%;">
 In the task, the oriented shapes will appear with lower contrast,<br><br>
 just like the examples below.<br><br>
 <strong>As you can see, the orientations are indicated by the green bars.</strong><br><br></p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.45_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${0}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.30_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${45}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/img_g_con0.15_n_con0.15.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 10}px; 
    top:${(screen.height / 2)}px; 
    width:${(screen.width / 6)}px; 
    height:${(screen.width / 6)}px;
    transform: rotate(${90}deg);
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width / 3) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${0}deg);
    opacity: 0.7;
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width / 2) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${45}deg);
    opacity: 0.7;
">
</p>
</p>
<img src="./img/create_img/img_instructions/green_arrow.png" 
style="
    position:absolute; 
    left:${(screen.width /1.5) - screen.width / 11}px; 
    top:${(screen.height / 2) + screen.width / 16}px; 
    width:${(screen.width / 7)}px; 
    height:${(screen.width / 28)}px;
    transform: rotate(${90}deg);
    opacity: 0.7;
">
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p12 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
 You&#39;ve probably noticed that some oriented shapes are easier to judge than others.<br><br>
 Don&#39;t worry, just do your best and pay close attention when the shape appears on the screen.<br><br></p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var instruction_text_p13 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
 Let&#39;s go through a few examples to help you get familiar with these degraded shapes.<br><br>
 The goal of the task remains the same: categorize the trial as blue or orange based on the orientations of the shapes.<br><br></p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

// var instruction_text_p14 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
// <h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
// <p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
//  Okay !<br><br>
//  An other example</p>
// <p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
//   <strong>press the space bar to continue</strong><br><br>
// </p>
// </div>
// `;

// var instruction_text_p15 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
// <h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
// <p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
//  Then, a last one...<br><br></p>
// <p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
//   <strong>press the space bar to continue</strong><br><br>
// </p>
// </div>
// `;

// var instruction_text_p16 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
// <h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
// <p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
//   Okay, great !<br><br>
//   Now you&#39;ll complete one final training block using various degraded shapes.<br>
//   This will help ensure you&#39;re familiar with the task and ready to begin the main experiment.<br><br>
//   Try to be as precise as possible in your answers.<br>
//   To help you, color-coded feedback will be provided.<br><br>
//   Ready ?<br></p>
// <p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
//   <strong>press the space bar to continue</strong><br><br>
// </p>
// </div>
// `;

var instruction_text_p14 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Okay, great !<br><br>
  You are able to complete the task.<br><br>
  Try to be as precise as possible in your answers.<br>
  Ready ?<br></p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

// Between blocks
var between_blocks_instruction = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Block Finished</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  You can take a small break.<br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

// End of experiment
var end_exp_text = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">End of the experiment</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Thank you very much for your participation.<br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

// Text to retry the training
var training_text = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Okay, great!<br><br>
  Let&#39;s start another block.<br><br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

// Text if the participant does not succeed to the training
var fail_text = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">End of the experiment</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%;">
  Thank you very much for your participation.<br><br>
  Please report the code <strong>CDGDVF3J</strong>.<br><br>
</p>
</div>
`;