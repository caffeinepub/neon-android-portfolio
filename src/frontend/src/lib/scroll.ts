export function smoothScrollTo(targetId: string) {
  const element = document.getElementById(targetId);
  if (element) {
    const offset = 80; // Account for fixed nav height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
