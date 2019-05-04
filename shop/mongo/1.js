var userName = 'an';
var time = Date.parse(new Date());
var data = {
    'username' : userName,
    'registTime' : time
}
var db = connect('liulang');
db.user.insert(data);
print('insert success');