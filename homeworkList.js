$(document).ready(function() {
      const projects = [
            {
                  name: "Code Generator",
                  href: "specilaist.github.io",
                  src: "",
                  alt: "Picture of random numbers"
            },
      ]

      let generate = function () {
            $.each(projects, function(_function, items) {
                  console.log(items);
                  const project = $('<div>');
                  project.addClass('')
                  const projectTag = $('<a>');
                  projectTag.attr('href', items.href)
                  const projectImage = $('<img>');
                  projectImage.addClass('image');
                  projectImage.attr('src', items.src);
                  $('#generateContainer').append();
            });


      }
});