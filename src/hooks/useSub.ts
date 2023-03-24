//减法功能-Hook
import { ref, watch } from 'vue';
export function useSub(num1: number, num2: number) {
    const subNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1: number, num2: number) => {
        subNum.value = num1 - num2
    }
    return {
        subNum,
        subFn
    }
}