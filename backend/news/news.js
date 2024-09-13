const fs = require("fs");

class News {
    constructor(filename = 'news.json') {
        this.path = `./data/${filename}`;

        try {
            fs.readdirSync('data')
        } catch (e) {
            fs.mkdirSync('data')
        }

        try {
            fs.accessSync(this.path);
        } catch (e) {
            fs.writeFileSync(this.path, '[]');
        }
    }

    createId() {
        return new Date().getTime().toString();
    }

    async create(data, id, imageName) {
        const totalData = JSON.parse(await fs.promises.readFile(this.path));
        // const id = this.createId()
        const { content } = data;
        const desc = content.substr(0, 100) + '...';
        totalData.push({ ...data, id, desc, thumbnail: `http://localhost:5000/${imageName}` });
        await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
        //2 means every line the arguments to 2
    }

    async getAll() {
        const data = JSON.parse(await fs.promises.readFile(this.path));
        return data.filter(news => delete news.content);
    }

    async getSingle(id) {
        const data = JSON.parse(await fs.promises.readFile(this.path));
        return data.find(news => news.id === id)
    }

    async getByCategory(category) {
        const data = await this.getAll();
        return data.filter(news => news.category === category);
    }
}

module.exports = News;