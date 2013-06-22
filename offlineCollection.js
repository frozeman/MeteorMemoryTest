/*
* OfflineCollections
*
* Works as wrapper to easily clean your local collections
*/
OfflineCollections = (function(){

    // PRIVATE
    var _this = this;
    _this.documentIds = {};

    // wrapp the Collection.insert() method, to store IDs
    var wrappedFind = Meteor.Collection.prototype.insert;
    Meteor.Collection.prototype.insert = function () {
        var documentId = wrappedFind.apply(this, arguments);
        var collectionName = this._name;

        if(!documentIds[collectionName])
            documentIds[collectionName] = [];

        // ADD the DOCUMENT ID to the OfflineCollections
        documentIds[collectionName].push(documentId);

        return documentId;
    };


    // PUBLIC
    return {
        clean: function(collection) {
            var collectionName = (_.isString(collection)) ? collection : _.find(_.keys(DB), function(key){ return _.isEqual(DB[key], collection); });

            // DELETE ALL DOCUMENTS from tLOCAL DB
            _this.documentIds[collectionName] = _.reject(_this.documentIds[collectionName], function(documentId) {

                DB[collectionName].remove({_id: documentId}, function(error) {
                    // TODO use Q to send if its successfull got removed
                });


                return true;
            });

            // CHECK if they got deleted
            if(_.isEmpty(_this.documentIds[collectionName]))
                delete _this.documentIds[collectionName];

        }
    }
})();