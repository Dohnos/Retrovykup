export const STATUS_LABELS: Record<string, string> = {
  nova: '🆕 Nová poptávka',
  probiha: '🔄 Probíhá',
  vyrizeno: '✅ Vyřízeno',
  nezajem: '❌ Nemám zájem',
  ceka: '⏳ Čeká na odpověď',
  domluveno: '🤝 Domluveno',
};

/** Krátké popisky + symbol pro mapu */
export const STATUS_SHORT: Record<string, { label: string; emoji: string }> = {
  nova: { label: 'Nová', emoji: '🆕' },
  probiha: { label: 'Probíhá', emoji: '🔄' },
  vyrizeno: { label: 'Vyřízeno', emoji: '✅' },
  nezajem: { label: 'Nezájem', emoji: '❌' },
  ceka: { label: 'Čeká', emoji: '⏳' },
  domluveno: { label: 'Domluveno', emoji: '🤝' },
};
