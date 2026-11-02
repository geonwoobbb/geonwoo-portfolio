const copyButton = document.querySelector('#copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('rkehzk@gmail.com');
    status.textContent = '이메일 주소를 복사했습니다.';
  } catch {
    status.textContent = '복사가 지원되지 않습니다. 위 이메일 주소를 선택해 복사해 주세요.';
  }
});
