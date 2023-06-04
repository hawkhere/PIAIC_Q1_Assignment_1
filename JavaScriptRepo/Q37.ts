function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("Small", "Run!");
