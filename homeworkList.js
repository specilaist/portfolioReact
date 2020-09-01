$(document).ready(function() {
      const projects = [
            {
                  name: "Code Generator",
                  href: "https://specilaist.github.io/generatePassword/",
                  src: "./Assets/password.png",
                  alt: "Picture of random numbers",
            },
            {
                  name: "Weather APP",
                  href: "https://specilaist.github.io/weatherApp/",
                  src: "./Assets/weather.png",
                  alt: "Multiple weather types",
            },
            {
                  name: "Lyric Jam",
                  href: "https://specilaist.github.io/Lyric-Jam/",
                  src: "./Assets/music.jpg",
                  alt: "Purple music note",
            },
            {
                  name: "Day Planner",
                  href: "https://specilaist.github.io/dayPlanner/",
                  src: "./Assets/calendar.jpg",
                  alt: "Calendar turning",
            },
            {
                  name: "Test Quiz",
                  href: "https://specilaist.github.io/Test-Quiz/",
                  src: "./Assets/quiz.webp",
                  alt: "Emojis questioning and with glasses",
            },
      ];

      console.log(projects);

      let generate = function () {
            $.each(projects, function(_function, items) {
                  console.log(items);
                  const project = $('<figure>');
                  project.addClass('projects col-md-6 col-sm-12 m-2 d-inline-block');

                  const banner = $('<div>');
                  banner.addClass('banner');


                  const projectImage = $('<img>');
                  projectImage.addClass('image');
                  projectImage.attr('src', items.src);
                  projectImage.attr('alt', items.alt);

                  const projectTag = $('<a>');
                  projectTag.attr('target', '_blank');
                  projectTag.attr('href', items.href);
                  projectTag.text(items.name);

                  banner.append(projectTag);
                  project.append(projectImage, banner);
                  $('#generateContainer').append(project);
            });


      };

      generate();
});