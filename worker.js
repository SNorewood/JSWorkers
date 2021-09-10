self.addEventListener('message', function(e) {
	self.sendNotification(
    var notification = new Notification('Notification title', {
   icon: 'https://cdn.eteknix.com/wp-content/uploads/2012/03/game3.png',
   body: 'Pre Order UP!',
  });
  notification.onclick = function() {
   window.open('https://www.game.co.uk/en/horizon-forbidden-west-regalla-edition-2858125');
  };
  );
}, false);