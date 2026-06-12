/* ══════════════════════════════════════════════
   공용 설정 — Supabase 연결 정보
   (index.html / login.html / staff.html / roles.html 공유)
══════════════════════════════════════════════ */
const SUPABASE_URL  = 'https://cxbtfhgjntpgcwoyjkba.supabase.co';
const SUPABASE_ANON = 'sb_publishable_laTHGZOmf1Ygearxipuj2w_BvIssubE';

/* 설정 유효성 검사 (구형 anon 키 + 신형 publishable 키 모두 지원) */
function sbConfigOk(){
  const urlOk = /^https:\/\/[a-z0-9]+\.supabase\.co$/.test(SUPABASE_URL);
  const keyOk = (SUPABASE_ANON.startsWith('eyJ') && SUPABASE_ANON.length > 100 && !SUPABASE_ANON.endsWith('...'))
             || SUPABASE_ANON.startsWith('sb_publishable_');
  return urlOk && keyOk;
}
