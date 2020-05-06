'use strict';
const Koa = require('koa');
const mysql = require('mysql');
const app = new Koa();

const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('poyfx');

	const name =collection.field()

	return name;

};
