// JavaScript to toggle subjects visibility
document.addEventListener('DOMContentLoaded', () => {
  const yearCards = document.querySelectorAll('.note-card');
  const subjectLists = document.querySelectorAll('.subjects-list');

  yearCards.forEach(card => {
    card.addEventListener('click', () => {
      const year = card.getAttribute('data-year');
      const targetList = document.getElementById(`${year}-year-subjects`);

      // Hide all other subjects
      subjectLists.forEach(list => list.style.display = 'none');

      // Toggle the selected year's subjects
      if (targetList.style.display === 'block') {
        targetList.style.display = 'none';
      } else {
        targetList.style.display = 'block';
      }
    });
  });
});

// Data for subjects and chapters (with Google Drive links)
const subjects = {
  "Data Structures": [
    { name: "Unit 1", link: "https://drive.google.com/file/d/11lJkEYw9jlt1DrIZCbJcqnb6bB01Uidg/view?usp=drive_link" },
    { name: "Unit 2", link: "https://drive.google.com/file/d/12R5pkkwGasZY8mkJjrRMv-iMBP9F-16q/view?usp=drive_link" },
    { name: "Unit 3", link: "https://drive.google.com/file/d/11uB3EQrhmxuA04truS0FygNP5TVqadaG/view?usp=drive_link" },
    { name: "Unit 4", link: "https://drive.google.com/file/d/12DZ40GbGRyKOW5PibmFoQo-ChP2aXWKL/view?usp=drive_link" },
    { name: "Unit 5", link: "https://drive.google.com/file/d/12C4rOufxalzaRK0ftZCuprPYMnLwN4IF/view?usp=drive_link" },
  ],
  "Operating Systems": [
    { name: "Unit 1", link: "https://drive.google.com/file/d/1OJqq-uo4BBH38bHYYW-DrZOGXYjvXPoO/view?usp=drive_link" },
    { name: "Unit 2", link: "https://drive.google.com/file/d/1OKp4AC5ayfXNxjxRPhpjLqqMgd4hSF2I/view?usp=drive_link" },
    { name: "Unit 3", link: "https://drive.google.com/file/d/1OSA0DTdU00y7_8v0oTbex0LTcicJamAZ/view?usp=drive_link" },
    { name: "Unit 4", link: "https://drive.google.com/file/d/1OVWsXmVLtBnfjdclcJy5624-GDzQ6O8s/view?usp=drive_link" },
    { name: "Unit 5", link: "https://drive.google.com/file/d/1OVvxYAIB4tA97j1Zac2Q_F7LDDCZ8t_B/view?usp=drive_link" },
  ],
  "COA": [
    { name: "Unit 1", link: "https://drive.google.com/file/d/1IBlOBDdvr29DrsHfCbcDZOUrJPNwZ_CR/view?usp=drive_link" },
    { name: "Unit 2", link: "https://drive.google.com/file/d/1HneCs0iCfgNJqb2F0Tep4wVPKUYc0j5a/view?usp=drive_link" },
    { name: "Unit 3", link: "https://drive.google.com/file/d/1I3tVGcsWR-xoP56oOvTj4BtKBUE63-YL/view?usp=drive_link" },
    { name: "Unit 4", link: "https://drive.google.com/file/d/1qL7s_E-Mwrz0CwH0sNTxzU9igv21Ucnd/view?usp=drive_link" },
    { name: "Unit 5", link: "https://drive.google.com/file/d/1qJhZ_-_oDp0A02AnEhqARtYO96sjhtgb/view?usp=drive_link" },
  ],
  "Human Values": [
    { name: "Unit 1", link: "https://drive.google.com/file/d/1IBlOBDdvr29DrsHfCbcDZOUrJPNwZ_CR/view?usp=drive_link" },
    { name: "Unit 2", link: "https://drive.google.com/file/d/1HneCs0iCfgNJqb2F0Tep4wVPKUYc0j5a/view?usp=drive_link" },
    { name: "Unit 3", link: "https://drive.google.com/file/d/1I3tVGcsWR-xoP56oOvTj4BtKBUE63-YL/view?usp=drive_link" },
    { name: "Unit 4", link: "https://drive.google.com/file/d/1qL7s_E-Mwrz0CwH0sNTxzU9igv21Ucnd/view?usp=drive_link" },
    { name: "Unit 5", link: "https://drive.google.com/file/d/1qJhZ_-_oDp0A02AnEhqARtYO96sjhtgb/view?usp=drive_link" },
  ],
};

// Get subject from query parameter
const params = new URLSearchParams(window.location.search);
const selectedSubject = params.get("subject");

// Update page dynamically
const subjectTitle = document.getElementById("subject-title");
const chapterList = document.getElementById("chapter-list");

if (selectedSubject && subjects[selectedSubject]) {
  subjectTitle.textContent = `Subject: ${selectedSubject}`;
  const chapters = subjects[selectedSubject];
  chapterList.innerHTML = chapters
    .map(
      (chapter) => `
        <li><a href="${chapter.link}" target="_blank" rel="noopener noreferrer">${chapter.name}</a></li>
      `
    )
    .join("");
} else if (subjectTitle && chapterList) {
  subjectTitle.textContent = "Subject not found";
  chapterList.innerHTML = `<li>No chapters available.</li>`;
}

