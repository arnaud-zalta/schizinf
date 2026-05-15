//////////////////////////////////////////////////////////////////////////
//                       create training bloc                           //
//////////////////////////////////////////////////////////////////////////

var training_text1 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
 Great!<br>  Let's begin a short training session under the same conditions as the actual task.<br>
As explained earlier, each trial will follow a simple sequence:<br>
<strong>1.</strong> A cue will briefly appear, showing the ideal orientation to focus on.<br>
<strong>2.</strong> Then, a tilted image will be displayed briefly also.<br><br>
At the end of each sequence, your task is to categorize the image as either<br>
<strong style="color: rgb(143, 165, 211);">blue</strong> or <strong style="color: rgb(241, 186, 137);">orange</strong><br>
based on its orientation relative to the cue.</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text2 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
You will now see some example sequences to help you get familiar with the task.<br>
Try to answer correctly :<br>
  If you think the image belongs to the <strong style="color: rgb(241, 186, 137);">orange category</strong>.
   Press the <strong style="color: rgb(241, 186, 137);">left arrow</strong>.<br><br>
  If you think the image belongs to the <strong style="color: rgb(143, 165, 211);">blue category</strong>.
   Press the <strong style="color: rgb(143, 165, 211);">right arrow</strong>.<br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text3 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Great!<br>
As you’ve seen, the sequence is dynamic:<br>
the titled image you need to focus on appears after the cue that gives you the orientation to focus on.<br>
Then, the image disappears, and you must choose between two categories.<br>
Let’s look at a few more examples to help you get familiar with the task.<br>
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;
var training_text4 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Okay, now pay close attention.<br> 
You’re about to begin a short block of sequences, and your goal is to answer as accurately as possible.<br> 
You’ll receive feedback at the end of each sequence,<br>
but you need <strong>to score above 80% correct</strong> to move on.<br>
So make sure to pay attention to the cue and then to the tilted image in order to categorize it correctly.
</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
// `;

var training_text5 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Ready ?</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text6 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Great !</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text7 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Please note that in the actual experiment, the images will be much more ambiguous.<br>
This means you’ll need to pay close attention to their orientation<br> in order to correctly categorize them as <strong style="color:rgb(143, 165, 211);">blue</strong> or <strong style="color: rgb(241, 186, 137);">orange</strong>.<br>
You may also notice that the image’s orientation can be closer to or farther from the reference cue.<br>
In fact, the closer the image’s orientation is to the cue, the more challenging the task becomes.<br>
But don’t worry — just try your best and stay focused on the image’s orientation to respond as accurately as possible.</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text8 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Let’s try categorizing another set of short sequences — this time with more ambiguous images.<br>
Ready?</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;

var training_text9 = `<div style='display: flex; align-items: center; justify-content: center; text-align: center;'>
<h1 style="position: absolute; top: 2%; width: 100%; font-size: 2em;">Instructions</h1>
<p style="font-size: 1.5em; position: absolute; top: 35%; width: 100%">
Great!<br> Now you're ready for the experiment.<br>
But before we begin, let’s go through one final training block featuring the different possible orientations.<br>
This time, it will be under the same conditions as the actual experiment:<br> <strong>with no feedback</strong>.<br><br>
Ready?</p>
<p style="font-size: 1.5em; position: absolute; top: 85%; width: 100%;">
  <strong>press the space bar to continue</strong><br><br>
</p>
</div>
`;