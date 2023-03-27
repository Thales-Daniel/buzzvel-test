/* eslint-disable no-unused-vars */
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { VscChromeClose } from "react-icons/vsc"

import QrModalTypes from "../../shared/interfaces/QrModal"

function QrModal({ children, open, setOpen }: QrModalTypes) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.1 } }}
            exit={{ scale: 0 }}
            className="modal-content-wrapper"
          >
            <button
              className="absolute text-xl top-6 right-6"
              type="button"
              onClick={() => setOpen(false)}
            >
              <VscChromeClose />
            </button>
            <motion.div className="modal-content">{children}</motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default QrModal
