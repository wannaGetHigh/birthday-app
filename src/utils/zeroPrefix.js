export default function zeroPrefix(time) {
    if (!time && typeof time !== 'number') return;
    if (time < 0) return '59'
    return time < 10 ? '0' + time : time;
}