from time import time
import sqlite3

class Channel:
    def __init__(self, owner_id, name):
        self.owner_id   = owner_id
        self.name       = name
        self.created_at = int(time())
        self.updated_at = int(time())

    def to_row(self):
        return (self.owner_id, self.channel_id, self.name, self.created_at, self.updated_at)

class Message:
    def __init__(self, owner_id, channel_id, msg_id):
        self.owner_id   = owner_id
        self.channel_id = channel_id
        self.msg_id     = msg_id
        self.created_at = int(time())

    def to_row(self):
        return (self.owner_id, self.channel_id, self.msg_id, self.created_at)

class Folder:
    def __init__(self, owner_id, name, favorite):
        self.owner_id   = owner_id
        self.name       = name
        self.created_at = int(time())
        self.updated_at = int(time())
        self.favorite   = favorite

    def to_row(self):
        return (self.owner_id, self.folder_id, self.name, self.created_at, self.updated_at, self.favorite)

class Document:
    def __init__(self, owner_id, folder_id, doc_type, doc_id):
        self.owner_id   = owner_id
        self.folder_id  = folder_id
        self.doc_type   = doc_type
        self.doc_id     = doc_id
        self.created_at = int(time())

    def to_row(self):
        return (self.owner_id, self.folder_id, self.doc_type, self.doc_id, self.created_at)

class Database:
    def __init__(self):
        self.conn = sqlite3.connect("dask.db")
        cursor = self.conn.cursor()

        cursor.execute("CREATE TABLE IF NOT EXISTS channels (owner_id TEXT, channel_id INTEGER PRIMARY KEY, name TEXT, created_at TEXT, updated_at TEXT)")
        cursor.execute("CREATE TABLE IF NOT EXISTS messages (owner_id TEXT, channel_id TEXT, msg_id TEXT, created_at TEXT)")

        cursor.execute("CREATE TABLE IF NOT EXISTS folders (owner_id TEXT, folder_id INTEGER PRIMARY KEY , name TEXT, created_at TEXT, updated_at TEXT, favorite INTEGER)")
        cursor.execute("CREATE TABLE IF NOT EXISTS documents (owner_id TEXT, folder_id TEXT, doc_type TEXT, doc_id TEXT, created_at TEXT)")

        self.conn.commit()

    def add_channel(self, channel):
        cursor = self.conn.cursor()

        cursor.execute("INSERT INTO channels VALUES (?, ?, ?, ?, ?)", channel.to_row())

        self.conn.commit()

    def add_message(self, msg):
        cursor = self.conn.cursor()

        cursor.execute("UPDATE channels set updated_at = (?) WHERE channel_id = (?)", (msg.created_at, msg.channel_id))
        cursor.execute("INSERT INTO messages VALUES (?, ?, ?, ?)", msg.to_row())

        self.conn.commit()


    def add_folder(self, folder):
        cursor = self.conn.cursor()

        cursor.execute("INSERT INTO folders VALUES (?, ?, ?, ?, ?, ?)", folder.to_row())

        self.conn.commit()

    def add_document(self, doc):
        cursor = self.conn.cursor()

        cursor.execute("UPDATE folders set updated_at = (?) WHERE folder_id = (?)", (doc.created_at, doc.folder_id))
        cursor.execute("INSERT INTO documents VALUES (?, ?, ?, ?, ?)", doc.to_row())

        self.conn.commit()

    def delete_channel(self, channel):
        cursor = self.conn.cursor()

        cursor.execute("DELETE FROM channels WHERE channel_id = \"" + channel.channel_id + "\"")

        self.conn.commit()

    def delete_folder(self, folder):
        cursor = self.conn.cursor()

        cursor.execute("DELETE FROM folders WHERE folder_id = \"" + folder.folder_id + "\"")

        self.conn.commit()

    def delete_document(self, doc):
        cursor = self.conn.cursor()

        cursor.execute("DELETE FROM documents WHERE doc_id = \"" + doc.doc_id + "\"")

        self.conn.commit()

    def fetchall(self, cmd):
        return self.conn.cursor().fetchall(cmd)

    def close(self):
        return self.conn.cursor().close()

    def execute(self, cmd):
        return self.conn.cursor().execute(cmd)


datab = Database()
