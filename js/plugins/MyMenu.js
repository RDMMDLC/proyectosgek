/*:
 * @plugindesc Menu personalizado.
 * @author Juan Pablo
 * @help Solo activalo y el menú cambiará
 */

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_MenuStatus.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

Window_MenuStatus.prototype.itemHeight = function() {
    var clientHeight = this.height - this.padding * 2;
    return Math.floor(clientHeight / this.numVisibleRows());
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
    var y = rect.y; //+ rect.height / 2 - this.lineHeight() * 1.5;
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = width / 4; //Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, width - (width2 * 3) - 10, y );
    //this.drawActorIcons(actor, x, y + lineHeight * 2);
    //this.drawActorClass(actor, x2, y);
    this.drawActorHp(actor, width - (width2 * 2) - 10, y, width2);
    this.drawActorMp(actor, width - width2, y, width2);
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

Scene_Menu.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_MenuStatus(0, this._commandWindow.height);
    this.addWindow(this._statusWindow);
};

Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadTitle1('Hexagram');
    this.addChild(this._backgroundSprite);
};

Window_Base.prototype.standardFontSize = function() {
    return 18;
};
