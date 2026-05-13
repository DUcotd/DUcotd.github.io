hexo.extend.filter.register('after_generate', function() {
  const fs = require('fs');
  const path = require('path');
  const nojekyll = path.join(hexo.public_dir, '.nojekyll');
  if (!fs.existsSync(nojekyll)) {
    fs.writeFileSync(nojekyll, '');
  }
});
