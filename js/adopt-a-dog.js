// this is for clicks on button to show first alert //
document.addEventListener("DOMContentLoaded", function() {
  const adoptButtons = document.querySelectorAll(".adopt-button");

  adoptButtons.forEach(button => {
    button.addEventListener("click", function() {
      const card = button.closest(".dog-box");
      const name = card.querySelector(".dog-name").textContent;
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      alert(`Dog: ${name}\nAdoption Fees: $${fees}`);
    });
  });
});

// this is for clicks on photos //
document.addEventListener("DOMContentLoaded", function() {
  const adoptPhoto = document.querySelectorAll(".dog-profile-photo");

  adoptPhoto.forEach(img => {
    img.addEventListener("click", function() {
      const card = img.closest(".dog-box");
      const name = card.querySelector(".dog-name").textContent;
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      alert(`Dog: ${name}\nAdoption Fees: $${fees}`);
    });
  });
});

// this is for the alert to add to total of adoption buttons clicked //
document.addEventListener("DOMContentLoaded", function() {
  const adoptButtons = document.querySelectorAll(".adopt-button");
  let totalAdoptionFees = 0;

  adoptButtons.forEach(button => {
    button.addEventListener("click", function() {
      const card = button.closest(".dog-box");
      const fees = parseFloat(card.querySelector(".adopt-fees").textContent.replace("Cost to adopt: $", ""));
      totalAdoptionFees += fees;
      alert(`Total Adoption Fees: $${totalAdoptionFees}`);
    });
  });
});

const blogPosts = [
  {
    headline: 'Traveling With Your Dog',
    image: 'images/blog-1.jpg',
    text: "I fell in the mud as I was walking home from school today. I wanted to flirt with the barista, but suddenly, I couldn't find my tongue. I like blueberries and mangoes but not strawberries. Suddenly from under the stove there came a squeak. I didn't know what to wear to my best friend's funeral. I'm taking a little road trip to Oklahoma City this morning. Tom realized he could be making a big mistake. He had a dream so real that he woke screaming."
  },
  {
    headline: 'How To Walk Multiple Dogs',
    image: 'images/blog-2.jpg',
    text: "I fell in the mud as I was walking home from school today. I wanted to flirt with the barista, but suddenly, I couldn't find my tongue. I like blueberries and mangoes but not strawberries. Suddenly from under the stove there came a squeak. I didn't know what to wear to my best friend's funeral. I'm taking a little road trip to Oklahoma City this morning. Tom realized he could be making a big mistake. He had a dream so real that he woke screaming."
  },
  {
    headline: 'Teach Your Dog To Fetch',
    image: 'images/blog-3.jpg',
    text: "I fell in the mud as I was walking home from school today. I wanted to flirt with the barista, but suddenly, I couldn't find my tongue. I like blueberries and mangoes but not strawberries. Suddenly from under the stove there came a squeak. I didn't know what to wear to my best friend's funeral. I'm taking a little road trip to Oklahoma City this morning. Tom realized he could be making a big mistake. He had a dream so real that he woke screaming."
  }
];

// Get the container where blog posts will be appended
const blogContainer = document.getElementById('blog-posts');

// Loop through the array of blog posts
blogPosts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.classList.add('blog-container');

  const imageElement = document.createElement('img');
  imageElement.src = post.image;
  imageElement.alt = post.headline;
  imageElement.classList.add('blog-photo');

  const blogTextElement = document.createElement('div')
  blogTextElement.classList.add('blog-text-box')

  const headlineElement = document.createElement('h3');
  headlineElement.textContent = post.headline;

  const textElement = document.createElement('p');
  textElement.textContent = post.text;

  // Append elements to the blog-text-box div
  blogTextElement.appendChild(headlineElement)
  blogTextElement.appendChild(textElement)

  // Append elements to the blog-container
  postElement.appendChild(imageElement);
  postElement.appendChild(blogTextElement)

  // Append the blog post to the dynamic-blog-posts container
  blogContainer.appendChild(postElement);
});



