import passport from 'passport';
import local from 'passport-local';
import userService from '../services/user.service';
import { comparePassword, hashPassword } from '../utils/encript.util';
