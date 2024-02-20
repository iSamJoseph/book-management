const express = require("express");
const Admin = require("../models/bookstoremodel");
const path = require("path");
const session = require("express-session");
const Book = require("../models/BookData");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const uservalid = await Admin.find({ username: username });

    // if(uservalid)
    if (uservalid.length === 0) {
      return res.status(404).json({ message: "No such user found" });
    } else {
      const match = password === uservalid[0].password;
      if (match) {
        req.session.userlogedin = true;
        req.session.user = uservalid;
        return res.cookie("user", "ok").json({
          user: "userok",
          id: uservalid[0]._id,
          name: uservalid[0].username,
        });
      }
    }

    if (password != uservalid[0].password) {
      return res.status(404).json({ message: "enter correct password" });
    }
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
  next();
};

//logout
exports.logout = (req, res, next) => {
  try {
    if (req.session.userlogedin) {
      req.session.userlogedin = false;
      req.session.user = null;
      session.Cookie = null;
      return res
        .clearCookie("user", null, "connect.sid", null)
        .json({ message: "user session destroyrd" }); // .end();
      //  res.status(200).json({message:'user session destroyrd'})
    }
  } catch (e) {
    res.status(404).json({ message: e.message });
  }

  next();
};

exports.addbook = async (req, res, next) => {
  try {
    const { title, author, description, publishyear } = req.body;
    if (!title || !author || !description || !publishyear) {
      throw new Error("Please Enter All Fields");
    }

    const newBook = await Book.create({
      title,
      author,
      description,
      publishyear,
    });

    console.log(newBook);
    return res.status(200).json("New Book Added");
    next();
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const Books = await Book.find();
    res.status(201).json({
      status: "success",
      data: {
        book: Books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
  next();
};

exports.getBookWithId = async (req, res, next) => {
  try {
    const BookGot = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success",
      length: BookGot.length,
      data: {
        BookGot,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
  next();
};

exports.patchBook = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const { title,author,description,publishyear} = req.body;

    if(!title || !author || !description || !publishyear){
      throw new Error('Please  fill all fields')
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        book: updatedBook,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
  next();
};

exports.deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
  next();
};
