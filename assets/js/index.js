$(document).ready(  function GetValue() {
    var myarray= new Array(
    "&ldquo;Aleks is a role model for students who graduate from Cornell. Intensely intelligent, endlessly curious, and above all&hairsp;—&hairsp;giving with his time and kindness. He was my first year professor and now a mentor and friend. I have many, many more words of support I can offer, but to make it simple&hairsp;—&hairsp;I cannot possibly imagine anyone more qualified to be a tenured professor than Aleks.&rdquo;<br><br>—Shuping Liu AIA, B.Arch &rsquo;14 / Senior Associate, SHoP architects",
    "&ldquo;I owe Aleks tremendous amount as an instructor and mentor. He fully deserves tenure and the opportunity to appeal this decision.&rdquo;<br><br>—Aaron Goldstein, B.Arch &rsquo;15 / Designer, David Jaehing Architect / Cornell Teaching Associate &rsquo;15–&rsquo;16",
    "&ldquo;I was lucky to have Aleks as my professor several times at Cornell (first year studio, second year comprehensive design, second year analysis, and summer travel studio). His focus on conceptual clarity, exploration and iteration, and presentation as extension of project are fundamental to the Cornell architecture program. His generosity with his time and attention are unmatched at AAP, and he has been an inspiration and mentor to me at every stage of my architectural career.&rdquo;<br><br>—Jackie Krasnokutskaya AIA, B.Arch &rsquo;14 / Project Architect, Weiss/Manfredi",
    "&ldquo;Mergold is an inspiring figure with a very interesting perspective. His critique always inspired.&rdquo;<br><br>—James Slade, B.Arch &rsquo;15",
    "&ldquo;A builder, a maker, and a doer. That’s the spirit he instills on others.  Tenure, he deserves.&rdquo;<br><br>—Todd Drucker, B.Arch &rsquo;17 / Architect",
    "&ldquo;Having taken part in Aleks’ <em>Spolia</em> course and worked with him as the sole faculty coordinator for Cornell’s chapter of the American Institute of Architecture Students, I can attest to Alek’s deep regard for the success of his students, both academically and professionally, and the strong benefits that he provides as a member of the faculty of the Cornell Architecture program.&rdquo;<br><br>—Ben Kessler, B.Arch &rsquo;16 / Masters candidate, Harvard University",
    "&ldquo;Aleks has been our teacher, advisor, professional mentor and friend. M and I half-joke when making major decisions but often consider out loud to one another, &lsquo;What would Aleks do?&rsquo; In this case, Aleks will do  what he does best&hairsp;—&hairsp;he will work hard and continue to be more productive and creatively free than most of us&hairsp;—&hairsp;but what will happen to Cornell Architecture? We fear this a sign that something special is vanishing. Today Cornell is a little less weird and a little more banal.&rdquo;<br><br>—Suzanne Lettieri, M.Arch &rsquo;12 / Assistant Professor");





  // Randomizer 2.0

  // Create an empty array for us to populate
  // var myarray = [];

  // Parses the DOM for every "#roster li a" element
  $("#roster li a").each(function() {
    // Get that item's text and it's href attribute
    var names = $(this).html();
    var href = $(this).attr('href');
    // Pushes the name and href into the array as one string
    myarray.push(names + ", " + href);
  });






  // Log our now populated array to the console to check
  console.log(myarray);


  // Click the Randomizer button!
  $("#randomizer").click(function() {

    // Remove any classes
    $("#chosenOne span").attr('class', '');

    // Choose a random whole number based on the roster.
    var chosenOne = Math.floor(Math.random() * myarray.length);

    // We could do something more exciting/suspenseful here... maybe play an animation for 2-3 seconds?

    // If there are myarray...
    if (myarray.length >= 1) {
      // Split our custom string into a name and an href
      var chosenName = myarray[chosenOne].split(", ")[0];
      var chosenLink = myarray[chosenOne].split(", ")[1];

      // Show their name in the console.
      console.log(myarray.length + ": " + myarray[chosenOne]);

      // Get first name
      var firstName = chosenName.split(" ")[0];

      // Display the "Chosen One" inside our <h1> element, and wrap it with a link.
      $("#chosenOne span").show();
      $("#chosenOne span").html(firstName);
      $("#chosenOne span").addClass(firstName);

      // Fade out our current "Chosen One"
      $("#roster li a:contains(" + chosenName + ")").addClass('selected');

      // Splice is an array method that removes our "Chosen One" from the list of myarray
      myarray.splice(chosenOne, 1);
    }

    // Once everyone has presented
    else {
      $("#chosenOne span").addClass('done');
      $("#chosenOne span").html("That's Everyone");
      setTimeout(function() {
        $("#chosenOne span").fadeOut('fast');
      }, 900);
    }
  });

  // Click the Randomizer button!
  $("#chosenOne span.done").click(function() {
    $(this).hide();
  });


});
