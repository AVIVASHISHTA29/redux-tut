import { useState } from "react";

const useCustomState = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    }
    return [value, setValue, reset];
}

export default useCustomState;