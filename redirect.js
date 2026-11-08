// Sends people to Freddie's site after 20 seconds, with a way to go early or stay put.
(() => {
  const TARGET = 'https://slick.freddieyershon.co.uk/';
  const DELAY = 20000;
  const RING = 175.93; // 2 * pi * r, with r = 28

  const seconds = document.getElementById('seconds');
  const secondsText = document.getElementById('seconds-text');
  const ring = document.getElementById('ring');
  const status = document.getElementById('status');
  const stay = document.getElementById('stay');

  const started = Date.now();
  let timer = null;
  let cancelled = false;

  function paint(left) {
    seconds.textContent = String(left);
    secondsText.textContent = String(left);
    ring.style.strokeDashoffset = String(RING * (1 - left / (DELAY / 1000)));
  }

  function tick() {
    if (cancelled) return;
    const left = Math.max(0, Math.ceil((DELAY - (Date.now() - started)) / 1000));
    paint(left);
    if (left === 0) {
      stop();
      status.textContent = 'Heading over now.';
      location.href = TARGET;
    }
  }

  function stop() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  stay.addEventListener('click', () => {
    cancelled = true;
    stop();
    paint(DELAY / 1000);
    status.textContent = 'Staying put. The link above still works whenever you want it.';
    stay.hidden = true;
  });

  paint(DELAY / 1000);
  timer = setInterval(tick, 250);
})();
