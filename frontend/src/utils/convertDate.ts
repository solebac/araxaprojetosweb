export const formatDate = (dateNormal: string) => {
    const importDate = new Date(new Date(dateNormal));
    const localePtbr = importDate.toLocaleDateString();
    return localePtbr;
}