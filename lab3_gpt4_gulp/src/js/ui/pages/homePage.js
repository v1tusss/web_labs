import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initVozmojnosti from "./../components/initVozmojnosti.js";
import initRegistraciya from "./../components/initRegistraciya.js";
import initBlog from "./../components/initBlog.js";
import initFooter from "./../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
  <section class="section header"></section>
  <section class="section hero_section"></section>
  <section class="section brands_section"></section>
  <section class="section what_is_chatgpt_section"></section>
  <section class="section future_here"></section>
  <section class="section vozmojnosti"></section>
  <section class="section registraciya"></section>
  <section class="section blog"></section>
  <footer class="section footer"></footer>
`;

  rootNode.insertAdjacentHTML("beforeend", template);
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Возможности" с мок датой
  const vozmojnostiNode = rootNode.querySelector(".vozmojnosti");
  initVozmojnosti(vozmojnostiNode);

  // инициализация раздела регистрации с мок датой
  const registraciyaNode = rootNode.querySelector(".registraciya");
  initRegistraciya(registraciyaNode);

  // инициализация раздела блога с мок датой
  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  // инициализация футера с мок датой
  const footerNode = rootNode.querySelector(".footer");
  initFooter(footerNode);

  // инициализация бургера для адаптивного меню
  // initBurger(headerNode);
};

export default homePage;
