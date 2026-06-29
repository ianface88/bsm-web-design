export function sectionHref(section: string): string {
  return `#${section}`;
}

export function handlePresetNavClick(
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  section: string,
  smooth: boolean
): void {
  event.preventDefault();
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  }
}

export function applyPresetHashOnLoad(): void {
  const hash = window.location.hash.slice(1);
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
