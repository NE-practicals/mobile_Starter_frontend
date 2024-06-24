
export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validatePassword = (password) => {
    return password.length >= 4;
}

export const validateProduct = (product) => {
    return {
        name: {
            valid: product.name.length > 0,
            message: "Name is required"
        },
        description: {
            valid: product.description.length > 0,
            message: "Description is required"
        },
        price: {
            valid: product.price > 0,
            message: "Price must be greater than 0"
        }
    }
}