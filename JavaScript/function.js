
'use strict';
/**
 * JavaScript通过函数生成和管理作用域（Scope）
 *
 * @returns {string}
 * @constructor
 */
function Constructor(){

    /**
     *
     * 此处包含两个“语句”：1、赋值运算语句；2、变量声明语句
     * Hoisting —— 预解析：
     *
     * @private 相对于其他OOP语言
     * @static 相对于其他OOP语言
     * @type {null}
     */
	var privateStaticPrototype = null;


	/**
	 * 在将Constructor作为构造函数使用new实例化为对象时
	 * 若return语句返回引用类型的数据（数组、对象、函数），则返回值将覆盖new创建的匿名对象
	 * 若return语句返回原始类型的数据或无返回值（无返回值时，返回undefined。null/boolean/number/string），则返回new创建的匿名对象
	 */
	return '<Statements>';
}

/**
 * 在将Constructor作为构造函数实例化为对象时，Constructor的隐藏属性prototype被赋值给该实例对象的隐藏且不可读取属性__proto__
 */
Constructor.prototype = {}
