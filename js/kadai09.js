fetch('https://click.ecc.ac.jp/ecc/sakakura/ajax/selector-list.php')
  .then(response => response.json())
  .then(data => {
    const categories = data.categories;
    const selectors = data.selectors;

    // Create a variable to store the HTML content
    let htmlContent = "";
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      document.querySelector(".active").insertAdjacentHTML("beforeend",
        `<li>${category}</li>`
      );
    }
    
    for (const selector of selectors) {
            document.querySelector("#category-wrap").innerHTML += `
                                                                    <div class="category">
                                                                      <h2>${selector.category}</h2>
                                                                      <dl></dl>
                                                                    </div>
                                                                    `;
            // Clear previous HTML content
            htmlContent = "";
            const list = selector.list;
            for (const element of list) {
              const type = element.type;
              const range = element.range;
              htmlContent += `  
                                <dt>${type}</dt>
                                <dd>${range}</dd>
                                `;
            }
            document.querySelector(".category dl").innerHTML += htmlContent;

          }

    document.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", e => {
        const category = e.target.innerHTML;
        document.querySelector("#category-wrap").innerHTML = ""; // Xóa nội dung cũ

        if (category === "すべてのセレクタ") {
          for (const selector of selectors) {
            document.querySelector("#category-wrap").innerHTML += `
                                                                    <div class="category">
                                                                    <h2>${selector.category}</h2>
                                                                    <dl></dl>
                                                                    </div>
                                                                    `;
            // Clear previous HTML content
            htmlContent = "";
            const list = selector.list;
            for (const element of list) {
              const type = element.type;
              const range = element.range;
              htmlContent += `
                                <dt>${type}</dt>
                                <dd>${range}</dd>
                              `;
            }
            document.querySelector(".category dl").innerHTML += htmlContent;
          }
        } else {
          for (const selector of selectors) {
            if (selector.category === category) {
              document.querySelector("#category-wrap").innerHTML += `
                                                                    <div class="category">
                                                                    <h2>${category}</h2>
                                                                    <dl></dl>
                                                                    </div>
                                                                    `;
              // Clear previous HTML content
              htmlContent = "";
              const list = selector.list;
              for (const element of list) {
                const type = element.type;
                const range = element.range;
                htmlContent += `
                                  <dt>${type}</dt>
                                  <dd>${range}</dd>
                                `;
              }
              document.querySelector(".category dl").innerHTML += htmlContent;
            }
          }
        }
      });
    });
  })
  .catch(error => {
    console.error("Error fetching selector data:", error);
  });
