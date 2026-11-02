const copyButton = document.querySelector('#copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('rkehzk@gmail.com'); status.textContent = '복사했습니다.'; }
  catch { status.textContent = '위 이메일 주소를 선택해 복사해 주세요.'; }
});
const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
const updateNavigation = () => {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12) current = sections.at(-1);
  for (const link of links) {
    const active = link.getAttribute('href') === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  }
};
window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
