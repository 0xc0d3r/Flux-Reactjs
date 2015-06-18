var AppDispatcher = require("../dispatcher/AppDispatcher");
var TodoConstants = require("../constants/TodoConstants");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';

var TODOs = {};

function create(text){
  var id = Date.now();
  TODOs[id] = {
    id : id,
    text : text,
    complete : false
  };
}

function destroy(id){
  delete TODOs[id];
}

var TodoStore = assign({},EventEmitter.prototype,{
  getAll : function(){
    return TODOs;
  },
  emitChange : function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener :  function(callback){
    this.removeListener(CHANGE_EVENT,callback);
  },
  dispatcherIndex : AppDispatcher.register(function(payload){
    var action = payload.action;
    var text;

    switch (action.actionType) {
      case TodoConstants.TODO_CREATE:
        text = action.text.trim();
        if(!text){
          create(text);
          TodoStore.emitChange();
        }
        break;
      case TodoConstants.TODO_DESTROY:
        destroy(action.id);
        TodoStore.emitChange();
        break;
    }
    return true;
  })
});

module.exports = TodoStore;
