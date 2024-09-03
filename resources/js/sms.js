function sms(){
                         var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                         $.ajax({
                                          /* the route pointing to the post function */
                                          url: '/sms',
                                          type: 'POST',
                                          data: {_token: CSRF_TOKEN,
                                            rc:'rc',
                                            ajaxflag:'request',},
                                          dataType: 'JSON',
                                          /* remind that 'data' is the response of the AjaxController */
                                          success: function (data) { 
                                            alert(data.sms)
                                               },
                                          error: function (xhr, status, error) {
                                                alert(xhr.responseText);
                                            },
                                        complete: function(){
                                      },
                                    });
                      }