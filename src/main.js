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

// Shared navigation keeps the current book page when switching resources.
const menu = document.getElementById('side-menu');
const menuToggle = document.getElementById('menu-toggle');
const backdrop = document.getElementById('menu-backdrop');
const simulatorContainer = document.getElementById('simulator-container');
const viewTitle = document.getElementById('view-title');
const resources = {
    'cuadernillo': { title: 'Cuadernillo' },
    'ondas-estacionarias': { title: 'Ondas estacionarias · UTP', file: 'OndasEstacionarias_FisicaIII_UTP.html' },
    'ondas-cuerdas': { title: 'Simulador de ondas en cuerdas', file: 'OndasCuerdas.html' }
};

function setMenuOpen(open) {
    menu.inert = !open;
    menu.classList.toggle('is-open', open);
    backdrop.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (open) document.getElementById('menu-close').focus();
    else menuToggle.focus();
}

menuToggle.addEventListener('click', () => setMenuOpen(menu.inert));
document.getElementById('menu-close').addEventListener('click', () => setMenuOpen(false));
backdrop.addEventListener('click', () => setMenuOpen(false));
document.addEventListener('keydown', event => {
    if (menu.inert) return;
    if (event.key === 'Escape') setMenuOpen(false);
    if (event.key === 'Tab') {
        const items = menu.querySelectorAll('button, a');
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
        }
    }
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

function selectView() {
    const key = location.hash.slice(1);
    const selected = Object.hasOwn(resources, key) ? key : 'cuadernillo';
    const resource = resources[selected];
    viewTitle.textContent = resource.title;
    document.title = `${resource.title} - Física III`;
    menu.querySelectorAll('a').forEach(link => {
        if (link.dataset.view === selected) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
    const isBook = selected === 'cuadernillo';
    bookContainer.hidden = !isBook;
    document.getElementById('bottom-nav').hidden = !isBook;
    simulatorContainer.hidden = isBook;
    simulatorContainer.replaceChildren();
    if (!isBook) {
        const frame = document.createElement('iframe');
        frame.title = resource.title;
        frame.src = `${import.meta.env.BASE_URL}simuladores/${resource.file}`;
        simulatorContainer.appendChild(frame);
    }
}
window.addEventListener('hashchange', selectView);
selectView();

function initializeSimulations() {
    // Handled in individual page onLoad functions
}

