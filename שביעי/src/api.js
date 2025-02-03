// export const fetchData = async () => {
//     const response = await fetch("https://dummyjson.com/products/category/mobile-accessories");
//     const result = await response.json();
//     return result.products;
// }

// export const fetchData = async () => {
//     return new Promise((resolve) => {
//         setTimeout(async () => {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const result = await response.json();
//             resolve(result);

//         }, 3000);
//     });
// };

export const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                if (Math.random() < 0.3) {
                    throw new Error("Simulated network error");
                }
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                resolve(result);
            } catch (error) {
                reject(error.message);
            }
        }, 3000);
    });
};
