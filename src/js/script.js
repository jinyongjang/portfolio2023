const skillLeft = document.querySelector('.skillLeft');
const skillRight = document.querySelector('.skillRight');

// .skillLeft 요소 고정
gsap.to(skillLeft, {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '50vw',
  height: '81.7vh',
});

// .skillRight 요소 스크롤 애니메이션
gsap.to(skillRight, {
  y: '-100%', // 원하는 움직임 방향과 정도로 설정 (예: 위로 이동시킬 경우 '-100%')
  ease: 'none', // 원하는 이징 옵션 선택 (예: 'none', 'power2.inOut', 'bounce', 등)
  scrollTrigger: {
    trigger: '.skill', // 스크롤 트리거로 사용할 요소 선택
    scrub: true, // 스크롤 속도에 따라 움직임 적용 (선택 사항)
  },
});