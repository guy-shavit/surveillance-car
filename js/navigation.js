// navigation.js

document.getElementById('openNav').addEventListener('click', function() {
    document.getElementById('sideNav').style.width = '250px';
});

document.getElementById('closeNav').addEventListener('click', function() {
    document.getElementById('sideNav').style.width = '0';
});
