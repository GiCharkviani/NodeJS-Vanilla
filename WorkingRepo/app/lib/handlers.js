/**
 * Request handlers
 *
 */

// Dependencies
const _data = require('./data');
const helpers = require('./helpers');
const config = require('./config');
const _url = require('url');
const dns = require('dns');
const _performance = require('perf_hooks').performance;
const util = require('util');
const debug = util.debuglog('performance');

// Define the handlers
const handlers = {};

// Users
handlers.users = function (data, callback) {
    const acceptableMethods = ['post', 'get', 'put', 'delete'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._users[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for the users sub methods
handlers._users = {};
/**
 * HTML Handlers
 */

// Index Handler
handlers.index = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Uptime Monitoring - Made Simple',
            'head.description': 'We offer free, simple uptime monitoring HTTP/HTTPS sites of all kinds, when your site goes down, we will send you sms to let you know',
            'body.class': 'index'
        }
        // Read in template as a string
        helpers.getTemplate('index', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
};

// Create Account
handlers.accountCreate = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Create an Account',
            'head.description': 'Signup is easy and only takes a few seconds',
            'body.class': 'accountCreate'
        }
        // Read in template as a string
        helpers.getTemplate('accountCreate', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}


// Create new session
handlers.sessionCreate = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Login to your Account',
            'head.description': 'Please enter your phone number and password to access your account',
            'body.class': 'sessionCreate'
        }
        // Read in template as a string
        helpers.getTemplate('sessionCreate', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Session has been deleted
handlers.sessionDeleted = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Logged Out',
            'head.description': 'You have been logged out of your account.',
            'body.class': 'sessionDeleted'
        }
        // Read in template as a string
        helpers.getTemplate('sessionDeleted', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Edit your account
handlers.accountEdit = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Account Settings',
            'body.class': 'accountEdit'
        }
        // Read in template as a string
        helpers.getTemplate('accountEdit', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Account has been deleted
handlers.accountDeleted = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Account Deleted',
            'head.description': 'Your account has been deleted',
            'body.class': 'accountDeleted'
        }
        // Read in template as a string
        helpers.getTemplate('accountDeleted', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Create a new check
handlers.checksCreate = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Create a New Check',
            'body.class': 'checksCreate'
        }
        // Read in template as a string
        helpers.getTemplate('checksCreate', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Dashboard (view all checks)
handlers.checksList = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Dashboard',
            'body.class': 'checksList'
        }
        // Read in template as a string
        helpers.getTemplate('checksList', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Edit a check
handlers.checksEdit = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Prepare data for interpolation
        const templateData = {
            'head.title': 'Check Details',
            'body.class': 'checksEdit'
        }
        // Read in template as a string
        helpers.getTemplate('checksEdit', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                })
            } else {
                callback(500, undefined, 'html');
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Favicon
handlers.favicon = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Read in the favicon's data
        helpers.getStaticAsset('favicon.ico', function (err, data) {
            if (!err && data) {
                // Callback the data
                callback(200, data, 'favicon');
            } else {
                callback(500);
            }
        })
    } else {
        callback(405);
    }
}

// Public assets
// Favicon
handlers.public = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method === 'get') {
        // Get the filename being requested
        const trimmedAssetName = data.trimmedPath.replace('public/', '').trim();
        if (trimmedAssetName.length > 0) {
            // Read in the asset's data
            helpers.getStaticAsset(trimmedAssetName, function (err, data) {
                if (!err && data) {
                    // Determine the content type (default to plain text)
                    let constentType = 'plain';
                    if (trimmedAssetName.indexOf('.css') > -1) {
                        constentType = 'css';
                    }
                    if (trimmedAssetName.indexOf('.png') > -1) {
                        constentType = 'png';
                    }
                    if (trimmedAssetName.indexOf('.jpg') > -1) {
                        constentType = 'jpg';
                    }
                    if (trimmedAssetName.indexOf('.ico') > -1) {
                        constentType = 'ico';
                    }

                    // Callback the data
                    callback(200, data, constentType);
                } else {
                    callback(404);
                }
            })
        } else {
            callback(404);
        }


    } else {
        callback(405);
    }
}

/**
 * JSON API Handlers
 */
// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = function (data, callback) {
    // Check that all required field are filled out
    const firstName = typeof (data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    const lastName = typeof (data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    const phone = typeof (data.payload.phone) == 'string' && data.payload.phone.trim().length === 9 ? data.payload.phone.trim() : false;
    const password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
    const tosAgreement = typeof (data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement ? data.payload.tosAgreement : false;

    if (firstName && lastName && phone && password && tosAgreement) {
        // Make sure that the user doesn't already exist
        _data.read('users', phone, function (err, data) {
            if (err) {
                // Hash the password
                const hashedPassword = helpers.hash(password);

                // Create the user object
                if (hashedPassword) {
                    const userObject = {
                        'firstName': firstName,
                        'lastName': lastName,
                        'phone': phone,
                        'hashedPassword': hashedPassword,
                        'tosAgreement': true
                    };

                    // Store the user
                    _data.create('users', phone, userObject, function (err) {
                        if (!err) {
                            callback(200);
                        } else {
                            callback(500, {'Error': 'Could not create the new user'});
                        }
                    })
                } else {
                    callback(500, {'Error': 'Could not hash the user\'s password'});
                }

            } else {
                // User already exists
                callback(400, {'Error': 'A user with that phone number already exists'});
            }
        })
    } else {
        callback(400, {'Error': 'Missing required fields'});
    }
}

// Users - get
// Required data: phone,
// Optional data: none
handlers._users.get = function (data, callback) {
    // Check that the phone number is valid
    const phone = typeof (data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length === 9 ? data.queryStringObject.phone.trim() : false;
    if (phone) {
        // Get the token from the headers
        const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the give token is valid for the phone number
        handlers._tokens.verifyToken(token, phone, function (tokenIsValid) {
            if (tokenIsValid) {
                // Lookup the user
                _data.read('users', phone, function (err, data) {
                    if (!err && data) {
                        // Remove the hashed password from the user object before returning it to th requester
                        delete data.hashedPassword;
                        callback(200, data);
                    } else {
                        callback(404, {'Error': 'User not found'});
                    }
                });
            } else {
                callback(403, {'Error': 'Missing required token in header, or token is invalid'})
            }
        });
    } else {
        callback(400, {'Error': 'Missing required field'});
    }

}

// Users - put
// Required data: phone
// Optional data: firstName, lastName, password (at least one must be specified)
handlers._users.put = function (data, callback) {
    // Check for the required field
    const phone = typeof (data.payload.phone) == 'string' && data.payload.phone.trim().length === 9 ? data.payload.phone.trim() : false;

    // Check for the optional fields
    const firstName = typeof (data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    const lastName = typeof (data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    const password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

    // Error if the phone is invalid
    if (phone) {
        // Error if nothing is sent to update
        if (firstName || lastName || password) {
            // Get the token from the headers
            const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
            // Verify that the give token is valid for the phone number
            handlers._tokens.verifyToken(token, phone, function (tokenIsValid) {
                if (tokenIsValid) {
                    // Lookup the user
                    _data.read('users', phone, function (err, userData) {
                        if (!err && userData) {
                            // Update the fields necessary
                            if (firstName) {
                                userData.firstName = firstName;
                            }
                            if (lastName) {
                                userData.lastName = lastName;
                            }
                            if (password) {
                                userData.hashedPassword = helpers.hash(password);
                            }
                            // Store the new updates
                            _data.update('users', phone, userData, function (err) {
                                if (!err) {
                                    callback(200);
                                } else {
                                    console.log(err);
                                    callback(500, {'Error': 'Could not update the user'});
                                }
                            })
                        } else {
                            callback(400, {'Error': 'The specified user does not exist'})
                        }
                    });
                } else {
                    callback(403, {'Error': 'Missing required token in header, or token is invalid'})
                }
            });
        } else {
            callback(400, {'Error': 'Missing fields to update'})
        }
    } else {
        callback(404, {'Error': 'Missing required field'})
    }
}

// Users - delete
// Required field: phone
handlers._users.delete = function (data, callback) {
    // Check that the phone number is valid
    const phone = typeof (data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length === 9 ? data.queryStringObject.phone.trim() : false;
    if (phone) {
        // Get the token from the headers
        const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the give token is valid for the phone number
        handlers._tokens.verifyToken(token, phone, function (tokenIsValid) {
            if (tokenIsValid) {
                // Lookup the user
                _data.read('users', phone, function (err, userData) {
                    if (!err && userData) {
                        _data.delete('users', phone, function (err) {
                            if (!err) {
                                // Delete each of the checks associated with the user
                                const userChecks = typeof (userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];
                                const checksToDelete = userChecks.length;
                                if (checksToDelete > 0) {
                                    let checksDeleted = 0;
                                    let deletionErrors = false;

                                    // Loop through the checks
                                    userChecks.forEach(function (checkId) {
                                        // Delete the check
                                        _data.delete('checks', checkId, function (err) {
                                            if (err) {
                                                deletionErrors = true;
                                            }
                                            checksDeleted++;
                                            if (checksDeleted === checksToDelete) {
                                                if (!deletionErrors) {
                                                    callback(200);
                                                } else {
                                                    callback(500, {'Error': 'Errors accountered while attempting to delete all of the user\'s checks. All checks may not have been deleted from the system successfully'})
                                                }
                                            }
                                        })
                                    });
                                } else {
                                    callback(200);
                                }
                            } else {
                                callback(500, {'Error': 'Could not delete the specified user'})
                            }
                        });
                    } else {
                        callback(400, {'Error': 'Could not find the specified user'});
                    }
                });
            } else {
                callback(403, {'Error': 'Missing required token in header, or token is invalid'})
            }
        });
    } else {
        callback(400, {'Error': 'Missing required field'});
    }
}


// Tokens
handlers.tokens = function (data, callback) {
    const acceptableMethods = ['post', 'get', 'put', 'delete'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._tokens[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for all the tokens methods
handlers._tokens = {};

// Tokens - post
// Required data: phone, password
// Optional data: none
handlers._tokens.post = function (data, callback) {
    _performance.mark('entered function');

    const phone = typeof (data.payload.phone) == 'string' && data.payload.phone.trim().length === 9 ? data.payload.phone.trim() : false;
    const password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

    _performance.mark('Inputs validated');

    if (phone && password) {
        // Lookup the user who matches that phone number
        _performance.mark('Beginning user lookup');
        _data.read('users', phone, function (err, userData) {
            _performance.mark('User lookup complete');
            if (!err && userData) {
                // Hash the sent password, and compare it to the password stored in the user object
                _performance.mark('Beginning password hashing');
                const hashedPassword = helpers.hash(password);
                _performance.mark('Password hashing complete');
                if (hashedPassword === userData.hashedPassword) {
                    // If valid, create a new token with a random name. Set expiration date 1 hour in the future
                    _performance.mark('Creating data for token');
                    const tokenId = helpers.createRandomString(20)
                    const expires = Date.now() + 1000 * 60 * 60;
                    const tokenObject = {
                        'phone': phone,
                        'id': tokenId,
                        'expires': expires
                    };

                    // Store the token
                    _performance.mark('Beginning storing token');
                    _data.create('tokens', tokenId, tokenObject, function (err) {
                        _performance.mark('Storing token complete');

                        // Gather all the measurements
                        _performance.measure('Beginning to end', 'entered function', 'Storing token complete');
                        _performance.measure('Validating user input', 'entered function', 'Inputs validated');
                        _performance.measure('User lookup', 'Beginning user lookup', 'User lookup complete');
                        _performance.measure('Password hashing', 'Beginning password hashing', 'Password hashing complete');
                        _performance.measure('Token data creation', 'Creating data for token', 'Beginning storing token');
                        _performance.measure('Token storing', 'Beginning storing token', 'Storing token complete');

                        // Log out all the measurements
                        const measurements = _performance.getEntriesByType('measure');
                        measurements.forEach(function (measurement) {
                            console.log('\x1b[33m%s\x1b[0m', measurement.name + ' ' + measurement.duration);
                        })

                        if (!err) {
                            callback(200, tokenObject);
                        } else {
                            callback(500, {'Error': 'Could not create the new token'});
                        }
                    })

                } else {
                    callback(400, {'Error': 'Password did not match the specified user\'s stored password'});
                }
            } else {
                callback(400, {'Error': 'Could not find the specified user'});
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field(s)'});
    }
}

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function (data, callback) {
    // Check that the id is valid
    const id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length === 20 ? data.queryStringObject.id.trim() : false;
    if (id) {
        // Lookup the user
        _data.read('tokens', id, function (err, tokenData) {
            if (!err && tokenData) {
                callback(200, tokenData);
            } else {
                callback(404, {'Error': 'User not found'});
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field'});
    }
}

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function (data, callback) {
    const id = typeof (data.payload.id) == 'string' && data.payload.id.trim().length === 20 ? data.payload.id.trim() : false;
    const extend = !!(typeof (data.payload.extend) == 'boolean' && data.payload.extend);
    if (id && extend) {
        // Lookup the token
        _data.read('tokens', id, function (err, tokenData) {
            if (!err && tokenData) {
                // Check to the make sure the token isn't already expired
                if (tokenData.expires > Date.now()) {
                    // Set the expiration an hour from now
                    tokenData.expires = Date.now() + 1000 * 60 * 60;

                    // Store the new updates
                    _data.update('tokens', id, tokenData, function (err) {
                        if (!err) {
                            callback(200)
                        } else {
                            callback(500, {'Error': "Could not update the token\'s expiration"})
                        }
                    });
                } else {
                    callback(400, {'Error': 'Token has already expired, and cannot be extended'})
                }
            } else {
                callback(400, {'Error': 'Specified token does not exist'})
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field(s) or field(s) are invalid'})
    }
}

// Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = function (data, callback) {
// Check that the id is valid
    const id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length === 20 ? data.queryStringObject.id.trim() : false;
    if (id) {
        // Lookup the token
        _data.read('tokens', id, function (err, data) {
            if (!err && data) {
                _data.delete('tokens', id, function (err) {
                    if (!err) {
                        callback(200)
                    } else {
                        callback(500, {'Error': 'Could not delete the specified token'})
                    }
                })
            } else {
                callback(400, {'Error': 'Could not find the specified token'});
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field'});
    }
}

// Verify if a given toke nid is currently valid for a give user
handlers._tokens.verifyToken = function (id, phone, callback) {
    // Lookup the token
    _data.read('tokens', id, function (err, tokenData) {
        if (!err && tokenData) {
            // Check that the token is for the give user and has not expired
            if (tokenData.phone === phone && tokenData.expires > Date.now()) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    })
}

// Checks
// Tokens
handlers.checks = function (data, callback) {
    const acceptableMethods = ['post', 'get', 'put', 'delete'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._checks[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for all the ckecks methods
handlers._checks = {};

// Checks - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none

handlers._checks.post = function (data, callback) {
    // Validate inputs
    const protocol = typeof (data.payload.protocol) == 'string' && ['http', 'https'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false;
    const url = typeof (data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;
    const method = typeof (data.payload.method) == 'string' && ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false;
    const successCodes = typeof (data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
    const timeoutSeconds = typeof (data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

    if (protocol && url && method && successCodes && timeoutSeconds) {
        // Get the token from the headers
        const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;

        // Lookup the user by reading the token
        _data.read('tokens', token, function (err, tokenData) {
            if (!err && tokenData) {
                const userPhone = tokenData.phone;

                // Lookup the user data
                _data.read('users', userPhone, function (err, userData) {
                    if (!err && userData) {
                        const userChecks = typeof (userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];
                        // Verify that the user has less than the number of max-checks-per-user
                        if (userChecks.length < config.maxChecks) {
                            // Verify that the URL given has DNS entries (and therefore can resolve)
                            const parseUrl = _url.parse(protocol + '://' + url, true);
                            const hostName = typeof(parseUrl.hostname) == 'string' && parseUrl.hostname.length > 0 ? parseUrl.hostname : false;

                            // Use DNS
                            dns.resolve(hostName, function (err, records) {
                                if(!err && records) {
                                    // Create a random id for the check
                                    const checkId = helpers.createRandomString(20);

                                    // Create the check object, and include the user's phone
                                    const checkObject = {
                                        'id': checkId,
                                        'userPhone': userPhone,
                                        'protocol': protocol,
                                        'url': url,
                                        'method': method,
                                        'successCodes': successCodes,
                                        'timeoutSeconds': timeoutSeconds
                                    }

                                    // Save the object
                                    _data.create('checks', checkId, checkObject, function (err) {
                                        if (!err) {
                                            // Add the check id to the user's object
                                            userData.checks = userChecks;
                                            userData.checks.push(checkId);

                                            // Save the new user data
                                            _data.update('users', userPhone, userData, function (err) {
                                                if (!err) {
                                                    // Return the data about the new check
                                                    callback(200, checkObject);
                                                } else {
                                                    callback(500, {'Error': 'Could not update the user with the new check'});
                                                }
                                            })
                                        } else {
                                            callback(500, {'Error': 'Could not create the new check'})
                                        }
                                    })
                                } else {
                                    callback(400, {'Error': 'The hostname of the URL entered did not resolve to any DNS entries'})
                                }
                            });

                        } else {
                            callback(400, {'Error': 'The user already has the maximum number of checks (' + config.maxChecks + ')'})
                        }
                    } else {
                        callback(403);
                    }
                })
            } else {
                callback(403);
            }
        })
    } else {
        callback(400, {'Error': 'Missing required inputs, or inputs are invalid'})
    }
}

// Checks - get
// Required data: id
// Optional data: none
handlers._checks.get = function (data, callback) {
    // Check that the id is valid
    const id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length === 20 ? data.queryStringObject.id.trim() : false;
    if (id) {
        // Lookup the check
        _data.read('checks', id, function (err, checkData) {
            if (!err && checkData) {
                // Get the token from the headers
                const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
                // Verify that the give token is valid and belongs to the user who created the check
                handlers._tokens.verifyToken(token, checkData.userPhone, function (tokenIsValid) {
                    if (tokenIsValid) {
                        // Return the check data
                        callback(200, checkData);
                    } else {
                        callback(403);
                    }
                });
            } else {
                callback(404);
            }
        })

    } else {
        callback(400, {'Error': 'Missing required field'});
    }

}

// Checks - put
// Required data: id
// Optional data: protocol, url, method, successCodes, timeoutSeconds (one must be set)
handlers._checks.put = function (data, callback) {
    // Check for the required field
    const id = typeof (data.payload.id) == 'string' && data.payload.id.trim().length === 20 ? data.payload.id.trim() : false;

    // Check for the optional fields
    const protocol = typeof (data.payload.protocol) == 'string' && ['http', 'https'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false;
    const url = typeof (data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;
    const method = typeof (data.payload.method) == 'string' && ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false;
    const successCodes = typeof (data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
    const timeoutSeconds = typeof (data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

    // Check to make sure id is valid
    if (id) {
        // Check to make sure one or more optional fields has been sent
        if (protocol || url || method || successCodes || timeoutSeconds) {
            // Lookup the check
            _data.read('checks', id, function (err, checkData) {
                if (!err && checkData) {
                    // Get the token from the headers
                    const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
                    // Verify that the give token is valid and belongs to the user who created the check
                    handlers._tokens.verifyToken(token, checkData.userPhone, function (tokenIsValid) {
                        if (tokenIsValid) {
                            // Update the check where necessary
                            if (protocol) {
                                checkData.protocol = protocol;
                            }
                            if (url) {
                                checkData.url = url;
                            }
                            if (method) {
                                checkData.method = method;
                            }
                            if (successCodes) {
                                checkData.successCodes = successCodes;
                            }
                            if (timeoutSeconds) {
                                checkData.timeoutSeconds = timeoutSeconds;
                            }

                            // Store the new updates
                            _data.update('checks', id, checkData, function (err) {
                                if (!err) {
                                    callback(200);
                                } else {
                                    callback(500, {'Error': 'Could not update the ckeck'});
                                }
                            })
                        } else {
                            callback(403);
                        }
                    })
                } else {
                    callback(400, {'Error': 'Check ID did not exist'});
                }
            })
        } else {
            callback(400, {'Error': 'Missing fields to update'});
        }
    } else {
        callback(400, {'Error': 'Missing required fields'});
    }
}


// Checks - delete
// Required data: id
// Optional data: none
handlers._checks.delete = function (data, callback) {
    // Check that the id is valid
    const id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length === 20 ? data.queryStringObject.id.trim() : false;
    if (id) {
        // Lookup the check
        _data.read('checks', id, function (err, checkData) {
            if (!err && checkData) {
                // Get the token from the headers
                const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;

                // Verify that the give token is valid for the phone number
                handlers._tokens.verifyToken(token, checkData.userPhone, function (tokenIsValid) {
                    if (tokenIsValid) {

                        // Delete the check data
                        _data.delete('checks', id, function (err) {
                            if (!err) {
                                // Lookup the user
                                _data.read('users', checkData.userPhone, function (err, userData) {
                                    if (!err && userData) {
                                        const userChecks = typeof (userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : [];

                                        // Remove the deleted check from their list of checks
                                        const checkPosition = userChecks.indexOf(id);
                                        if (checkPosition > -1) {
                                            userChecks.splice(checkPosition, 1);
                                            // Re-save the user's data
                                            _data.update('users', checkData.userPhone, userData, function (err) {
                                                if (!err) {
                                                    callback(200);
                                                } else {
                                                    callback(500, {'Error': 'Could not update the user'});
                                                }
                                            });
                                        } else {
                                            callback(500, {'Error': 'Could not find the check on the users object, so could not remove it'});
                                        }
                                    } else {
                                        callback(500, {'Error': 'Could not find the user who created the check, so could not remove the check from the list of user object'});
                                    }
                                });
                            } else {
                                callback(500, {'Error': 'Could not delete the check data'})
                            }
                        })
                    } else {
                        callback(403)
                    }
                });
            } else {
                callback(400, {'Error': 'The specified check ID does not exist'});
            }
        });
    } else {
        callback(400, {'Error': 'Missing required field'});
    }
}

// Ping
handlers.ping = function (data, callback) {
    callback(200);
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};


// Export the module
module.exports = handlers;