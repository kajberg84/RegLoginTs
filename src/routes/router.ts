/**
 * Main Router.
 *
 * @author Kaj Berg
 * @version 0.0.1
 */

import express, { Router } from 'express'
import createError from 'http-errors'
import { userRouter } from './user-router'
import { usersRouter } from './users-router'
import { loginRouter } from './login-router'
import { refreshRouter } from './refresh-router'

const router: Router = express.Router()
// TODO: Gå igenom alla och ta bort ts-nocheck.
//Login router controller done
router.use('/login', loginRouter)
// User router 
router.use('/user', userRouter)
router.use('/users', usersRouter)
router.use('/refresh', refreshRouter)

// Catch 500 as last route
router.use('*', (req, res, next) => next(createError(500)))

export default router
