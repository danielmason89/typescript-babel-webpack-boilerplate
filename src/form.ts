export const formData = (form: HTMLFormElement) => {
    const input = form.querySelectorAll("input");
    let values: {[prop: string]: string} = {};

    input.forEach(input => {
        values[input.id] = input.value
    });
    return values;
}