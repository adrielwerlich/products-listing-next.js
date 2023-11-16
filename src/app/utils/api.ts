interface PaginationOptions {
    page: number;
    rows: number;
    sortBy: string;
    orderBy: 'ASC' | 'DESC';
}

export async function getProducts(options: PaginationOptions = { page: 1, rows: 8, sortBy: 'id', orderBy: 'DESC' }) {
    const { page, rows, sortBy, orderBy } = options;
    const url = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
