import { createIcons, Home, ChevronLeft, ChevronRight, List, Palette, ZoomIn, ZoomOut, Move } from 'lucide';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';
import { pages } from './pages.js';

// Setup Lucide Icons
createIcons({
    icons: { Home, ChevronLeft, ChevronRight, List, Palette, ZoomIn, ZoomOut, Move }
});

const bookContainer = document.getElementById('book-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnHome = document.getElementById('btn-home');
const btnIndex = document.getElementById('btn-index');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');

let currentPage = 1;

function renderPages() {
    bookContainer.innerHTML = '';
    pages.forEach((pageData, index) => {
        const pageNum = index + 1;
        const pageEl = document.createElement('div');
        pageEl.className = 'page';
        if (pageNum === 1) pageEl.classList.add('cover');
        pageEl.id = `page-${pageNum}`;
        pageEl.innerHTML = pageData.content;
        bookContainer.appendChild(pageEl);
    });
    totalPagesEl.textContent = pages.length;
    showPage(currentPage);
    renderMath();
    initializeSimulations();
}

function renderMath() {
    renderMathInElement(bookContainer, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
        ],
        throwOnError: false
    });
}

function showPage(pageNum) {
    if (pageNum < 1 || pageNum > pages.length) return;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageNum}`).classList.add('active');
    
    currentPage = pageNum;
    currentPageEl.textContent = currentPage;
    
    btnPrev.disabled = currentPage === 1;
    btnNext.disabled = currentPage === pages.length;
    
    // Call page specific logic if exists
    if (pages[currentPage - 1].onLoad) {
        pages[currentPage - 1].onLoad();
    }
}

// Navigation Events
btnPrev.addEventListener('click', () => showPage(currentPage - 1));
btnNext.addEventListener('click', () => showPage(currentPage + 1));
btnHome.addEventListener('click', () => showPage(1));
btnIndex.addEventListener('click', () => showPage(2)); // Asumiendo página 2 es índice

// Initialize
window.goToPage = showPage;
renderPages();

function initializeSimulations() {
    // Handled in individual page onLoad functions
}

