/*:
 * @plugindesc Menu personalizado.
 * @author Juan Pablo
 * @help Solo activalo y el menú cambiará
 */
Window_Base.prototype.standardFontSize = function() {
return 18;
};
Scene_MenuBase.prototype.createBackground = function() {
this._backgroundSprite = new Sprite();
this._backgroundSprite.bitmap = ImageManager.loadTitle1('Hexagram');
this.addChild(this._backgroundSprite);
};
Window_MenuCommand.prototype.windowWidth = function() {
return Graphics.boxWidth / 2; 
};
Window_MenuCommand.prototype.windowHeight = function() {
return this.fittingHeight(this.numVisibleRows());
};
Window_MenuCommand.prototype.numVisibleRows = function() {
return this.maxItems() / 2;
};
Window_MenuCommand.prototype.maxCols = function() {
return 2;
};
Window_MenuStatus.prototype.windowWidth = function() {
return Graphics.boxWidth;
};
Window_MenuStatus.prototype.windowHeight = function() { 
return this.fittingHeight(this.numVisibleRows());
};
Window_MenuStatus.prototype.drawItemImage = function(index) { 
var actor = $gameParty.members()[index];
var rect = this.itemRect(index);
this.changePaintOpacity(actor.isBattleMember());
this.drawActorFace(actor, rect.x + 1, rect.y + 1, 144, this.windowHeight() / this.numVisibleRows() - (this.padding / 2));
this.changePaintOpacity(true);
};
Window_MenuStatus.prototype.drawItemStatus = function(index) {
var actor = $gameParty.members()[index];
var rect = this.itemRect(index); 
var x = rect.x + 32;
var y = rect.y; //todos los elementos se dibujan en la misma linea 
var width = rect.width - x - this.textPadding();
this.drawActorSimpleStatus(actor, x, y, width);
};
Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
var lineHeight = this.lineHeight();
var x2 = x + 180;
var width2 = width / 4; // el ancho de los elementos dibujados es igual al ancho de la ventana entre cuatro
this.drawActorName(actor, x, y);
this.drawActorLevel(actor, width - (width2 * 3) - 10, y );
this.drawActorHp(actor, width - (width2 * 2) - 10, y, width2);
this.drawActorMp(actor, width - width2, y, width2);
};
Scene_Menu.prototype.createStatusWindow = function() {
this._statusWindow = new Window_MenuStatus(0, this._commandWindow.height); 
this.addWindow(this._statusWindow);
};