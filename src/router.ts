import {Router} from 'express'

const router = Router()


//in express (colon and id) this means its a variable => is a paramater its dynamic => 
//i am calling it id and reference it
// we just want to catch everything that looks like this
//------------------
// with put all of it be updated, the only thing will stay the same would be the id. COMPLETE OVERWRİTE
// patch only update whatever you sent and keep the rest the same


/**
 * Product
 */
router.get("/product", (req, res) => {
    res.json({ message: req.ssh_secret });
  });
  
  router.get("/product/:id", (req, res) => {});
  
  router.post("/product", (req, res) => {});
  
  router.put("/product/:id", (req, res) => {});
  
  router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.put("/update/:id", (req, res) => {});

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
