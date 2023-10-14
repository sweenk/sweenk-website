// Import CSS files

// import "swiper/css";

// Import dependencies
import persist from "@alpinejs/persist";
import Alpine from "alpinejs";
import WOW from "wowjs";
import Swiper from "swiper";

// AlpineJS Setup
Alpine.plugin(persist);
(window as any).Alpine = Alpine;
Alpine.start();

(window as any).wow = new WOW.WOW({
  mobile: false,
});
(window as any).wow.init({
  offset: 50,
});

const sections: NodeListOf<HTMLElement> =
  document.querySelectorAll("section[id]");

const scrollActive = (): void => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id") || "";

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        ?.classList.add("!text-white", "nav-gradient");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        ?.classList.remove("!text-white", "nav-gradient");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// Box highlighter
class Highlighter {
  container: Element;
  boxes: Element[];
  mouse: { x: number; y: number };
  containerSize: { w: number; h: number };

  constructor(containerElement: Element) {
    this.container = containerElement;
    this.boxes = Array.from(this.container.children);
    this.mouse = { x: 0, y: 0 };
    this.containerSize = { w: 0, h: 0 };
    this.init();
  }

  initContainer(): void {
    // this.containerSize.w = this.container?.offsetWidth;
    // this.containerSize.h = this.container?.offsetHeight;
  }

  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;
    const rect = this.container.getBoundingClientRect();
    const { w, h } = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;

    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;

      this.boxes.forEach((box) => {
        const boxX =
          -(box.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const boxY =
          -(box.getBoundingClientRect().top - rect.top) + this.mouse.y;
        // box.style.setProperty("--mouse-x", `${boxX}px`);
        // box.style.setProperty("--mouse-y", `${boxY}px`);
      });
    }
  }

  init(): void {
    this.initContainer();
    window.addEventListener("resize", this.initContainer.bind(this));
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
  }
}

const highlighters: NodeListOf<Element> =
  document.querySelectorAll("[data-highlighter]");
highlighters.forEach((highlighter) => {
  new Highlighter(highlighter);
});

// Clients carousel
const clientsCarousel = new Swiper(".clients-carousel", {
  // modules: [Autoplay],
  slidesPerView: "auto",
  spaceBetween: 64,
  loop: true,
  speed: 5000,
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {});
