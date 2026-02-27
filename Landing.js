document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box4 = document.getElementById('box4');
    const box5 = document.getElementById('box5');
    const box6 = document.getElementById('box6');

    box1.addEventListener('click', () => {
        window.open('http://localhost:8890/notebooks/dataextract.ipynb', '_blank');
    });

    box2.addEventListener('click', () => {
        window.open('http://localhost:8890/notebooks/eda.ipynb', '_blank');
    });

    box3.addEventListener('click', () => {
        window.open('http://localhost:8890/notebooks/featureeng.ipynb', '_blank');
    });

    box4.addEventListener('click', () => {
        window.open('report.pdf', '_blank');
    });

    box5.addEventListener('click', () => {
        window.open('http://localhost:8890/notebooks/Training.ipynb', '_blank');
    });

    box6.addEventListener('click', () => {
        window.open('http://localhost:8890/notebooks/Testing.ipynb', '_blank');
    });
});
