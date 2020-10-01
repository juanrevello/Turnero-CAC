
function doGet() 
{
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function getRequestApp()
{
	return new AppLib.RequestsApp('https://docs.google.com/spreadsheets/d/1btAshguQ8c9-xaqqtiggQW8rIzdhbPFnL6OVDdfjeG8/edit');
}

function loadRequests()
{
	return getRequestApp().getNewRequests();
} 

function requestDetails(id)
{
	return getRequestApp().requestDetails(id);
}

function approveRequest(id)
{
	return getRequestApp().approveRequest(id);
}

function rejectRequest(id)
{
	return getRequestApp().rejectRequest(id);
}

function newRequest(req)
{
	return getRequestApp().newRequest(req);
}

function approvedRequests()
{
	return getRequestApp().approvedRequests();
}