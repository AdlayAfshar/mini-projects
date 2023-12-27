const testimonials = [
  {
    name: "Adlay",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "rem ipsum, dolor sit amet consectetur adipisicing elit. Minus officiis error aliquam impedit asperiores nostrum quisquam culpa tempore qui repellat ullam quaerat eligendi officia maxime animi hic, consectetur iur",
  },
  {
    name: "Arman",
    photoUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "rem ipsum, dolor sit amet consectetur adipisicing elit. Minus officiis error aliquam impedit asperiores nostrum quisquam culpa tempore qui repellat ullam quaerat eligendi officia maxime animi hic, consectetur iur",
  },
  {
    name: "Ayda",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "rem ipsum, dolor sit amet consectetur adipisicing elit. Minus officiis error aliquam impedit asperiores nostrum quisquam culpa tempore qui repellat ullam quaerat eligendi officia maxime animi hic, consectetur iur",
  },
  {
    name: "Sana",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "rem ipsum, dolor sit amet consectetur adipisicing elit. Minus officiis error aliquam impedit asperiores nostrum quisquam culpa tempore qui repellat ullam quaerat eligendi officia maxime animi hic, consectetur iur",
  },
];

const img = document.querySelector("img");
const text = document.querySelector(".text");
const userName = document.querySelector(".userName");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  img.src = photoUrl;
  text.innerText = text;
  userName.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
