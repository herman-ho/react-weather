var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=New%20York,NY'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=New%20Haven,CT'>New Haven, CT</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
