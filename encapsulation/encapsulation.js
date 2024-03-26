function generateRandomId() {
    return Math.floor(Math.random() * 1000)
}

class User {
    private _username;
    private _password;
    private _id;


    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId()
    }

    get username() {
        return this._username
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value
    }

    get id() {
        return this._id
    }
}

const user = new User("Nurdin", "nurdin-top2008");
user.username = 5;


// Инкапсуляция и раскрытие
class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables;

    constructor(url, port, username, password, tables) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    createNewTable(table) {
        this._tables.push(table);
    }
    clearTables(table){
        this._tables = []
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username
    }

    get password() {
        return this._password
    }

    get tables() {
        return this._tables
    }
}

const db = new Database(1, 2, 3, 4);
db.createNewTable({name: "roles"});
db.clearTables();