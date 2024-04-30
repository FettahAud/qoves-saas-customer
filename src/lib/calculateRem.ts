export const calculateRem = () => {
  if (
    document.documentElement.clientWidth > 1920 ||
    document.documentElement.clientWidth < 420
  ) {
    document.documentElement.style.fontSize = "16px";
    return;
  } else {
    let rem = 16;
    if (document.documentElement.clientWidth > 1280) {
      rem = (16 / 1920) * document.documentElement.clientWidth;
    } else if (document.documentElement.clientWidth > 768) {
      rem = (16 / 1280) * document.documentElement.clientWidth;
    } else if (document.documentElement.clientWidth > 420) {
      rem = (16 / 768) * document.documentElement.clientWidth;
    }
    document.documentElement.style.fontSize = `${rem}px`;
  }
};
